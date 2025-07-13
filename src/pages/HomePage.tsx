
import React from 'react';
import RiskBadge from '@/components/RiskBadge';
import DashboardCard from '@/components/DashboardCard';
import QuickLinks from '@/components/QuickLinks';
import AlertsBanner from '@/components/AlertsBanner';
import TodaysVisits from '@/components/TodaysVisits';
import LatestActivity, { ActivityEvent } from '@/components/LatestActivity';
import ToDoCard from '@/components/ToDoCard';
import { useUserTasks } from '@/hooks/useUserTasks';

// Mock data
const mockVisits = [
  { id: '1', facilityCode: 'FA-12', facilityName: 'Farm Alpha', startTime: '2025-05-01T14:00:00', endTime: '2025-05-01T16:00:00' },
  { id: '2', facilityCode: 'FB-34', facilityName: 'Farm Beta', startTime: '2025-05-01T17:00:00', endTime: '2025-05-01T18:00:00' },
];

const mockEvents: ActivityEvent[] = [
  { id: '1', type: 'gps', timestamp: '2025-05-01T13:45:00', description: 'GPS location updated' },
  { id: '2', type: 'access', timestamp: '2025-05-01T12:30:00', description: 'Access request approved: Farm Alpha' },
  { id: '3', type: 'risk', timestamp: '2025-05-01T11:15:00', description: 'Risk level changed to LOW' },
];

const HomePage = () => {
  const [riskLevel, setRiskLevel] = React.useState<'LOW' | 'MEDIUM' | 'HIGH'>('LOW');
  const { data: tasks = [], isLoading: tasksLoading } = useUserTasks(3, ['pending', 'in_progress']);

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple dark:text-purple-400">OrbitAg Dashboard</h1>
      
      {/* Card 1: Risk Badge */}
      <DashboardCard className="flex justify-center py-6">
        <RiskBadge level={riskLevel} />
      </DashboardCard>
      
      {/* Card 2: To-Dos */}
      <ToDoCard tasks={tasks} isLoading={tasksLoading} />
      
      {/* Card 3: Quick Links */}
      <DashboardCard>
        <h3 className="text-lg font-medium mb-3">Quick Access</h3>
        <QuickLinks />
      </DashboardCard>
      
      {/* Card 4: Alerts */}
      <DashboardCard>
        <AlertsBanner />
      </DashboardCard>
      
      {/* Card 5: Today's Visits */}
      <DashboardCard>
        <TodaysVisits visits={mockVisits} />
      </DashboardCard>
      
      {/* Card 6: Latest Activity */}
      <DashboardCard>
        <LatestActivity events={mockEvents} />
      </DashboardCard>
    </div>
  );
};

export default HomePage;
