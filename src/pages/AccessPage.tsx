
import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import CompanySwitcher from '../components/CompanySwitcher';
import { useUserFacilities } from '@/hooks/useUserFacilities';

interface Company {
  id: string;
  name: string;
}

const AccessPage = () => {
  const navigate = useNavigate();
  const { data: userFacilities = [], isLoading } = useUserFacilities();
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Extract unique companies from facilities
  const userCompanies: Company[] = React.useMemo(() => {
    const companyMap = new Map<string, Company>();
    
    userFacilities.forEach(facility => {
      if (facility.companyId && !companyMap.has(facility.companyId)) {
        // In real implementation, you'd fetch company names
        companyMap.set(facility.companyId, { 
          id: facility.companyId, 
          name: `Company ${facility.companyId.substring(0, 8)}` 
        });
      }
    });
    
    return Array.from(companyMap.values());
  }, [userFacilities]);
  
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | 'all'>(
    userCompanies.length === 1 ? userCompanies[0]?.id : 'all'
  );
  
  const showCompanyPicker = userCompanies.length > 1;
  
  // Filter facilities based on selected company and search query
  const filteredFacilities = React.useMemo(() => {
    return userFacilities.filter((facility) => {
      const matchesCompany = selectedCompanyId === 'all' || facility.companyId === selectedCompanyId;
      const matchesSearch = searchQuery === '' || 
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (facility.address && facility.address.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCompany && matchesSearch;
    });
  }, [userFacilities, selectedCompanyId, searchQuery]);
  
  const handleRequestAccess = (facilityId: string) => {
    // Navigate to Access Wizard with pre-populated facility
    navigate(`/access-wizard?facility=${facilityId}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple dark:text-purple-400">Facility Access</h1>
      
      {isLoading ? (
        <div className="text-center py-8">
          <p>Loading facilities...</p>
        </div>
      ) : (
        <>
          {showCompanyPicker && (
            <CompanySwitcher
              companies={userCompanies}
              selectedCompanyId={selectedCompanyId}
              onSelectCompany={setSelectedCompanyId}
            />
          )}
          
          <div className="mb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search facilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            {filteredFacilities.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {userFacilities.length === 0 ? 'You do not have access to any facilities' : 'No facilities found'}
              </div>
            ) : (
              filteredFacilities.map((facility) => (
                <div key={facility.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <Building2 size={18} className="mr-2 text-brandPurple" />
                        <h3 className="font-medium">{facility.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{facility.address || 'No address available'}</p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleRequestAccess(facility.id)}
                      className="bg-brandPurple hover:bg-purple-800"
                    >
                      Request Access
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AccessPage;
