
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from './use-toast';

interface Vehicle {
  id: string;
  plate: string | null;
  type: string | null;
  isDefault: boolean | null;
  make: string | null;
  model: string | null;
  color: string | null;
}

export const useUserVehicles = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const fetchUserVehicles = async (): Promise<Vehicle[]> => {
    if (!user) return [];
    
    try {
      const { data, error } = await supabase
        .from('vehicle_attrs')
        .select('id, plate, type, is_default, make, model, color')
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error fetching user vehicles:', error);
        toast({
          title: 'Error',
          description: 'Failed to load vehicle data',
          variant: 'destructive',
        });
        return [];
      }
      
      return data.map(vehicle => ({
        id: vehicle.id,
        plate: vehicle.plate,
        type: vehicle.type,
        isDefault: vehicle.is_default,
        make: vehicle.make,
        model: vehicle.model,
        color: vehicle.color
      }));
    } catch (error) {
      console.error('Unexpected error in useUserVehicles:', error);
      toast({
        title: 'Error',
        description: 'Failed to load vehicles data',
        variant: 'destructive',
      });
      return [];
    }
  };
  
  return useQuery({
    queryKey: ['userVehicles', user?.id],
    queryFn: fetchUserVehicles,
    enabled: !!user,
  });
};
