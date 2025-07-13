
import React from 'react';
import { Building, Check } from 'lucide-react';

export interface Facility {
  id: string;
  name: string;
  address: string;
}

interface FacilityStepProps {
  facilities: Facility[];
  selectedFacility: Facility | null;
  onSelectFacility: (facility: Facility) => void;
}

const FacilityStep = ({ facilities, selectedFacility, onSelectFacility }: FacilityStepProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4 flex items-center">
        <Building size={18} className="mr-2 text-brandPurple" />
        Select Facility
      </h2>
      
      <div className="space-y-3">
        {facilities.map((facility) => (
          <div 
            key={facility.id}
            className={`p-4 border rounded-lg cursor-pointer ${selectedFacility?.id === facility.id ? 'border-brandPurple bg-purple-50' : 'border-gray-200'}`}
            onClick={() => onSelectFacility(facility)}
          >
            <div className="flex justify-between">
              <h3 className="font-medium">{facility.name}</h3>
              {selectedFacility?.id === facility.id && (
                <Check size={18} className="text-brandPurple" />
              )}
            </div>
            <p className="text-sm text-gray-500">{facility.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityStep;
