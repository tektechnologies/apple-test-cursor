
import React from 'react';
import { Check } from 'lucide-react';
import { Facility } from './FacilityStep';
import { Vehicle } from './VehicleStep';

interface ReviewStepProps {
  selectedFacility: Facility | null;
  selectedVehicle: Vehicle | null;
}

const ReviewStep = ({ selectedFacility, selectedVehicle }: ReviewStepProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4 flex items-center">
        <Check size={18} className="mr-2 text-brandPurple" />
        Review Request
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-1">Selected Facility</h3>
          <div className="font-medium">{selectedFacility?.name}</div>
          <div className="text-sm">{selectedFacility?.address}</div>
        </div>
        
        {selectedVehicle && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500 mb-1">Selected Vehicle</h3>
            <div className="font-medium">{selectedVehicle.plate}</div>
            <div className="text-sm">{selectedVehicle.type}</div>
          </div>
        )}
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-1">Time</h3>
          <div className="font-medium">Today, {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
