
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Facility } from '@/components/access-wizard/FacilityStep';
import { Vehicle } from '@/components/access-wizard/VehicleStep';
import { mockFacilities } from '@/components/access-wizard/mockData';

type Step = 'facility' | 'vehicle' | 'review';

export const useAccessWizard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<Step>('facility');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  // Check URL for facilityId parameter when component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const facilityId = queryParams.get('facilityId');
    
    if (facilityId) {
      const facility = mockFacilities.find(f => f.id === facilityId);
      if (facility) {
        setSelectedFacility(facility);
      }
    }
  }, [location.search]);
  
  const handleNext = () => {
    if (step === 'facility') setStep('vehicle');
    else if (step === 'vehicle') setStep('review');
    else {
      // Submit the request (would call API in real app)
      navigate('/', { state: { requestSubmitted: true } });
    }
  };
  
  const handleBack = () => {
    if (step === 'vehicle') setStep('facility');
    else if (step === 'review') setStep('vehicle');
    else navigate('/');
  };

  const skipVehicle = () => {
    setSelectedVehicle(null);
    setStep('review');
  };
  
  const canProceed = () => {
    if (step === 'facility') return selectedFacility !== null;
    if (step === 'vehicle') return true; // Vehicle is optional
    return true;
  };

  return {
    step,
    selectedFacility,
    selectedVehicle,
    setSelectedFacility,
    setSelectedVehicle,
    handleNext,
    handleBack,
    skipVehicle,
    canProceed
  };
};
