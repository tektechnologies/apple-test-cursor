
import { Facility } from './FacilityStep';
import { Vehicle } from './VehicleStep';

export const mockFacilities: Facility[] = [
  { id: '1', name: 'Farm Alpha', address: '123 Agricultural Way' },
  { id: '2', name: 'Farm Beta', address: '456 Harvest Road' },
  { id: '3', name: 'Processing Plant', address: '789 Industry Blvd' },
];

export const mockVehicles: Vehicle[] = [
  { id: '1', plate: 'ABC-123', type: 'Truck' },
  { id: '2', plate: 'XYZ-789', type: 'Car' },
];
