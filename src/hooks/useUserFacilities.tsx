
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from './use-toast';

interface Facility {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lon: number;
  companyId?: string;
}

export const useUserFacilities = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const fetchUserFacilities = async (): Promise<Facility[]> => {
    if (!user) return [];
    
    try {
      // Get the facility entity type ID first
      const { data: facilityTypeId } = await supabase
        .rpc('get_facility_entity_type_id');
      
      if (!facilityTypeId) {
        console.error('Could not determine facility entity type');
        return [];
      }
      
      // Fetch user's company associations first (to handle company-level access)
      const { data: companyAssociations, error: companyError } = await supabase
        .from('user_associations')
        .select('company_id')
        .eq('user_id', user.id)
        .is('facility_id', null);
      
      if (companyError) {
        console.error('Error fetching company associations:', companyError);
        return [];
      }
      
      // Also fetch user's direct facility associations
      const { data: facilityAssociations, error: facilityError } = await supabase
        .from('user_associations')
        .select('facility_id')
        .eq('user_id', user.id)
        .not('facility_id', 'is', null);
      
      if (facilityError) {
        console.error('Error fetching facility associations:', facilityError);
        return [];
      }

      // Collect all facility IDs the user has access to
      let facilityIds: string[] = [];
      let companyIds: string[] = [];
      
      // Add direct facility associations
      if (facilityAssociations && facilityAssociations.length > 0) {
        facilityIds = facilityAssociations
          .map(assoc => assoc.facility_id)
          .filter(Boolean) as string[];
      }
      
      // Add company-level associations
      if (companyAssociations && companyAssociations.length > 0) {
        companyIds = companyAssociations
          .map(assoc => assoc.company_id)
          .filter(Boolean) as string[];
      }

      let allFacilityEntities: any[] = [];
      
      // First, fetch facilities directly associated with the user
      if (facilityIds.length > 0) {
        const { data: directFacilities, error: directError } = await supabase
          .from('entities')
          .select('id, name, company_id')
          .eq('entity_type_id', facilityTypeId)
          .in('id', facilityIds);
        
        if (directError) {
          console.error('Error fetching direct facilities:', directError);
        } else if (directFacilities) {
          allFacilityEntities = [...directFacilities];
        }
      }
      
      // Then, fetch facilities from companies the user has access to
      if (companyIds.length > 0) {
        const { data: companyFacilities, error: companyFacilitiesError } = await supabase
          .from('entities')
          .select('id, name, company_id')
          .eq('entity_type_id', facilityTypeId)
          .in('company_id', companyIds);
        
        if (companyFacilitiesError) {
          console.error('Error fetching company facilities:', companyFacilitiesError);
        } else if (companyFacilities) {
          // Add company facilities without duplicates
          const existingIds = new Set(allFacilityEntities.map(f => f.id));
          const uniqueCompanyFacilities = companyFacilities.filter(f => !existingIds.has(f.id));
          allFacilityEntities = [...allFacilityEntities, ...uniqueCompanyFacilities];
        }
      }
      
      if (allFacilityEntities.length === 0) {
        return [];
      }
      
      // Fetch facility attributes separately
      const allIds = allFacilityEntities.map(entity => entity.id);
      const { data: facilityAttrs, error: attrsError } = await supabase
        .from('facility_attrs')
        .select('id, address, lat, lon')
        .in('id', allIds);
      
      if (attrsError) {
        console.error('Error fetching facility attributes:', attrsError);
        toast({
          title: 'Error',
          description: 'Failed to load facility details',
          variant: 'destructive',
        });
      }
      
      // Map facility attributes by ID for easy lookup
      const attrsMap: Record<string, any> = {};
      facilityAttrs?.forEach(attr => {
        attrsMap[attr.id] = attr;
      });
      
      // Combine entity and attribute data
      return allFacilityEntities.map(entity => {
        const attrs = attrsMap[entity.id] || { address: '', lat: 0, lon: 0 };
        return {
          id: entity.id,
          name: entity.name,
          address: attrs.address || '',
          lat: attrs.lat || 0,
          lon: attrs.lon || 0,
          companyId: entity.company_id,
        };
      });
      
    } catch (error) {
      console.error('Unexpected error in useUserFacilities:', error);
      toast({
        title: 'Error',
        description: 'Failed to load facilities data',
        variant: 'destructive',
      });
      return [];
    }
  };
  
  return useQuery({
    queryKey: ['userFacilities', user?.id],
    queryFn: fetchUserFacilities,
    enabled: !!user,
  });
};
