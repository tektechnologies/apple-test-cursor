
import React from 'react';
import StepIndicator from '@/components/access-wizard/StepIndicator';
import FacilityStep from '@/components/access-wizard/FacilityStep';
import VehicleStep from '@/components/access-wizard/VehicleStep';
import ReviewStep from '@/components/access-wizard/ReviewStep';
import NavigationButtons from '@/components/access-wizard/NavigationButtons';
import { mockFacilities, mockVehicles } from '@/components/access-wizard/mockData';
import { useAccessWizard } from '@/hooks/useAccessWizard';

const AccessWizardPage = () => {
  const {
    step,
    selectedFacility,
    selectedVehicle,
    setSelectedFacility,
    setSelectedVehicle,
    handleNext,
    handleBack,
    skipVehicle,
    canProceed
  } = useAccessWizard();
  
  const renderCurrentStep = () => {
    switch(step) {
      case 'facility':
        return (
          <FacilityStep 
            facilities={mockFacilities}
            selectedFacility={selectedFacility}
            onSelectFacility={setSelectedFacility}
          />
        );
      case 'vehicle':
        return (
          <VehicleStep 
            vehicles={mockVehicles}
            selectedVehicle={selectedVehicle}
            onSelectVehicle={setSelectedVehicle}
            onSkipVehicle={skipVehicle}
          />
        );
      case 'review':
        return (
          <ReviewStep 
            selectedFacility={selectedFacility} 
            selectedVehicle={selectedVehicle}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple">Access Request</h1>
      
      <StepIndicator currentStep={step} />
      
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-card">
        {renderCurrentStep()}
        
        <NavigationButtons 
          step={step}
          canProceed={canProceed()}
          onBack={handleBack}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default AccessWizardPage;
