
import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Link to="/access-wizard" className="w-full">
        <Button 
          variant="default" 
          className="w-full flex items-center bg-brandPurple hover:bg-purple-800"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Request Access
        </Button>
      </Link>
      <Link to="/auth-page" className="w-full">
        <Button 
          variant="outline" 
          className="w-full flex items-center border-brandPurple text-brandPurple hover:bg-purple-100"
        >
          <KeyRound className="mr-2 h-4 w-4" />
          Door Access
        </Button>
      </Link>
    </div>
  );
};

export default QuickLinks;
