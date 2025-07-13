
import React from 'react';

type Step = 'facility' | 'vehicle' | 'review';

interface StepIndicatorProps {
  currentStep: Step;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'facility' ? 'bg-brandPurple text-white' : 'bg-gray-200 text-gray-600'}`}>
          1
        </div>
        <div className={`h-1 w-8 ${currentStep !== 'facility' ? 'bg-brandPurple' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'vehicle' ? 'bg-brandPurple text-white' : currentStep === 'review' ? 'bg-gray-200 text-gray-600' : 'bg-gray-200 text-gray-400'}`}>
          2
        </div>
        <div className={`h-1 w-8 ${currentStep === 'review' ? 'bg-brandPurple' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'review' ? 'bg-brandPurple text-white' : 'bg-gray-200 text-gray-400'}`}>
          3
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
