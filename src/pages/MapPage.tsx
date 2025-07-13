
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useUserFacilities } from '@/hooks/useUserFacilities';
import { useNavigate } from 'react-router-dom';

const MapPage = () => {
  const navigate = useNavigate();
  const { data: facilities = [], isLoading } = useUserFacilities();
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  
  const handleRequestAccess = () => {
    if (selectedFacility) {
      navigate(`/access-wizard?facilityId=${selectedFacility.id}`);
    }
  };
  
  return (
    <div className="relative h-[calc(100vh-64px)]">
      {/* Mock Map - in a real app, this would be Mapbox GL */}
      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
        {isLoading ? (
          <div className="text-center text-gray-500">
            <p>Loading facilities...</p>
          </div>
        ) : facilities.length > 0 ? (
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 text-brandPurple" />
            <p>Mapbox GL would render here</p>
            <p className="text-sm">with {facilities.length} authorized facility pins</p>
            
            {/* Example of facility selection - in a real app, this would be on map click */}
            <div className="mt-4">
              <p>Available Facilities:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {facilities.map((facility) => (
                  <Button 
                    key={facility.id}
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedFacility(facility)}
                    className={selectedFacility?.id === facility.id ? "border-brandPurple text-brandPurple" : ""}
                  >
                    {facility.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
            <p>No authorized facilities found</p>
            <p className="text-sm">You don't have access to any facilities</p>
          </div>
        )}
      </div>
      
      {/* Locate me FAB */}
      <Button 
        className="absolute bottom-20 right-4 rounded-full w-12 h-12 p-0 bg-white text-brandPurple hover:bg-gray-100 shadow-lg"
        variant="outline"
      >
        <Navigation size={20} />
      </Button>
      
      {/* Facility Bottom Sheet (simplified) */}
      {selectedFacility && (
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-3xl p-4 shadow-lg">
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <h2 className="text-lg font-bold mb-2">{selectedFacility.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{selectedFacility.address || 'No address available'}</p>
          
          <Button 
            className="w-full bg-brandPurple hover:bg-purple-800"
            onClick={handleRequestAccess}
          >
            Request Access
          </Button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
