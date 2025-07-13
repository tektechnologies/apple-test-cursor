
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Step = 'facility' | 'vehicle' | 'review';

interface NavigationButtonsProps {
  step: Step;
  canProceed: boolean;
  onBack: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ step, canProceed, onBack, onNext }: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-8">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="flex items-center"
      >
        <ChevronLeft size={16} className="mr-1" />
        {step === 'facility' ? 'Cancel' : 'Back'}
      </Button>
      
      <Button 
        onClick={onNext}
        disabled={!canProceed}
        className="flex items-center bg-brandPurple hover:bg-purple-800"
      >
        {step === 'review' ? 'Submit Request' : 'Next'}
        {step !== 'review' && <ChevronRight size={16} className="ml-1" />}
      </Button>
    </div>
  );
};

export default NavigationButtons;
