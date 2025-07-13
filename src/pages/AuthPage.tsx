
import React, { useState } from 'react';
import { KeyRound, Smartphone, QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/DashboardCard";

const AuthPage = () => {
  const [isPinVisible, setIsPinVisible] = useState(false);
  const [showNfcHelper, setShowNfcHelper] = useState(false);
  
  const accessPin = "4582"; // This would come from API in a real app
  
  const togglePinVisibility = () => {
    // In a real app, this would trigger FaceID/TouchID first
    setIsPinVisible(!isPinVisible);
  };
  
  const handleNfcTap = () => {
    setShowNfcHelper(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple">Door Access</h1>
      
      <DashboardCard className="mb-6">
        <div className="flex items-center mb-4">
          <KeyRound size={20} className="mr-2 text-brandPurple" />
          <h2 className="text-lg font-medium">Your Access PIN</h2>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-mono tracking-widest mb-4">
            {isPinVisible ? accessPin : "••••"}
          </div>
          
          <Button 
            variant="outline"
            onClick={togglePinVisibility}
            className="text-brandPurple border-brandPurple"
          >
            {isPinVisible ? "Hide PIN" : "Show PIN"}
          </Button>
          
          <p className="text-xs text-gray-500 mt-4">
            Your PIN can be used at all authorized facilities
          </p>
        </div>
      </DashboardCard>
      
      <DashboardCard>
        <div className="flex items-center mb-4">
          <Smartphone size={20} className="mr-2 text-brandPurple" />
          <h2 className="text-lg font-medium">NFC Access</h2>
        </div>
        
        {showNfcHelper ? (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="animate-pulse">
                <Smartphone size={64} className="text-brandPurple" />
              </div>
            </div>
            <p className="mb-4">Hold your phone near the door reader</p>
            <Button
              variant="outline"
              onClick={() => setShowNfcHelper(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button 
            variant="default" 
            className="w-full bg-brandPurple hover:bg-purple-800"
            onClick={handleNfcTap}
          >
            <QrCode size={16} className="mr-2" />
            Tap to Unlock Door
          </Button>
        )}
      </DashboardCard>
    </div>
  );
};

export default AuthPage;
