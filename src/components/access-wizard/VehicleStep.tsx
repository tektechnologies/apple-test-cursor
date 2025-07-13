
import React from 'react';
import { Car, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface Vehicle {
  id: string;
  plate: string;
  type: string;
}

interface VehicleStepProps {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onSkipVehicle: () => void;
}

const VehicleStep = ({ vehicles, selectedVehicle, onSelectVehicle, onSkipVehicle }: VehicleStepProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4 flex items-center">
        <Car size={18} className="mr-2 text-brandPurple" />
        Select Vehicle (Optional)
      </h2>
      
      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <div 
            key={vehicle.id}
            className={`p-4 border rounded-lg cursor-pointer ${selectedVehicle?.id === vehicle.id ? 'border-brandPurple bg-purple-50' : 'border-gray-200'}`}
            onClick={() => onSelectVehicle(vehicle)}
          >
            <div className="flex justify-between">
              <h3 className="font-medium">{vehicle.plate}</h3>
              {selectedVehicle?.id === vehicle.id && (
                <Check size={18} className="text-brandPurple" />
              )}
            </div>
            <p className="text-sm text-gray-500">{vehicle.type}</p>
          </div>
        ))}
        
        <div className="text-center mt-4">
          <Button 
            variant="outline" 
            className="text-brandPurple border-brandPurple hover:bg-purple-50"
            onClick={onSkipVehicle}
          >
            Skip Vehicle Selection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleStep;
