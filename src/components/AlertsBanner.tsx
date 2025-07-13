
import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAlerts } from '@/contexts/AlertsContext';

interface AlertsBannerProps {
  unreadCount?: number;
}

const AlertsBanner = ({ unreadCount: propUnreadCount }: AlertsBannerProps) => {
  const { unreadCount: contextUnreadCount } = useAlerts();
  
  // Use the prop if provided, otherwise use the context
  const unreadCount = propUnreadCount !== undefined ? propUnreadCount : contextUnreadCount;
  
  return (
    <Link to="/alerts" className="block">
      <div className="flex items-center justify-between bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
          <h3 className="font-medium">Recent Alerts</h3>
        </div>
        {unreadCount > 0 && (
          <div className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {unreadCount}
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-1 pl-1">
        {unreadCount > 0 
          ? `You have ${unreadCount} unread alert${unreadCount !== 1 ? 's' : ''}`
          : 'No new alerts'
        }
      </p>
    </Link>
  );
};

export default AlertsBanner;
