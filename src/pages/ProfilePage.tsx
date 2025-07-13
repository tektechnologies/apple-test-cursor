
import React from 'react';
import { User, LogOut, Moon, Car, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import DashboardCard from "@/components/DashboardCard";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useUserVehicles } from "@/hooks/useUserVehicles";
import { useUserFacilities } from "@/hooks/useUserFacilities";
import { supabase } from '@/integrations/supabase/client';
import { useTheme } from "next-themes";

interface Activity {
  id: string;
  description: string;
  timestamp: string;
}

// Mock activities as this data doesn't exist in the database yet
const mockActivities = [
  { id: '1', description: 'Access granted: Farm Alpha', timestamp: '2025-05-01T14:30:00' },
  { id: '2', description: 'GPS location updated', timestamp: '2025-05-01T13:45:00' },
  { id: '3', description: 'Risk level changed to LOW', timestamp: '2025-05-01T11:15:00' },
];

const ProfilePage = () => {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: vehicles = [], isLoading: vehiclesLoading } = useUserVehicles();
  const { data: facilities = [] } = useUserFacilities();
  const [userProfile, setUserProfile] = React.useState<{full_name: string | null, email: string} | null>(null);
  
  React.useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('full_name, email')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Error fetching user profile:', error);
          return;
        }
        
        if (data) {
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Unexpected error in fetchUserProfile:', error);
      }
    };
    
    fetchUserProfile();
  }, [user]);
  
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Provide visual feedback to the user
    toast({
      title: `${theme === 'dark' ? 'Light' : 'Dark'} mode enabled`,
      description: `Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`,
    });
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logout successful",
        description: "You have been logged out",
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "An error occurred during logout",
        variant: "destructive",
      });
    }
  };
  
  const handleAddVehicle = () => {
    navigate('/add-vehicle');
  };
  
  // Get the company name from the first facility if available
  const companyName = facilities && facilities.length > 0 ? 
    "FarmTech Solutions Inc." : "FarmTech Solutions Inc.";
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple dark:text-purple-400">Profile</h1>
      
      {/* User Info */}
      <DashboardCard>
        <div className="flex items-center">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-3 mr-4">
            <User size={24} className="text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h2 className="font-medium">{userProfile?.full_name || user?.email || 'User'}</h2>
            <p className="text-sm text-gray-500">{userProfile?.email || user?.email}</p>
            <p className="text-xs mt-1 text-gray-500">{companyName}</p>
          </div>
        </div>
      </DashboardCard>
      
      {/* Vehicles */}
      <DashboardCard>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Car size={18} className="mr-2 text-brandPurple" />
            <h3 className="font-medium">Vehicles</h3>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={handleAddVehicle}
          >
            + Add
          </Button>
        </div>
        
        {vehiclesLoading ? (
          <div className="py-4 text-center text-gray-500">Loading vehicles...</div>
        ) : vehicles.length > 0 ? (
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{vehicle.plate || 'No Plate'}</span>
                    {vehicle.isDefault && (
                      <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {[vehicle.make, vehicle.model, vehicle.type].filter(Boolean).join(' • ')}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center text-gray-500">No vehicles found</div>
        )}
      </DashboardCard>
      
      {/* Activity */}
      <DashboardCard>
        <div className="flex items-center mb-4">
          <Activity size={18} className="mr-2 text-brandPurple" />
          <h3 className="font-medium">Recent Activity</h3>
        </div>
        
        <div className="space-y-2">
          {mockActivities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              <div className="text-sm">{activity.description}</div>
              <div className="text-xs text-gray-500">
                {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
      
      {/* Settings */}
      <DashboardCard>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Moon size={18} className="mr-2" />
            <span>Dark Mode</span>
          </div>
          <Switch 
            checked={theme === 'dark'} 
            onCheckedChange={toggleDarkMode} 
          />
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4 text-red-500 dark:text-red-400 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/30"
          onClick={handleLogout}
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </Button>
      </DashboardCard>
    </div>
  );
};

export default ProfilePage;
