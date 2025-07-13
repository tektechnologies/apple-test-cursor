
import React from 'react';

export interface ActivityEvent {
  id: string;
  type: 'gps' | 'access' | 'risk';
  timestamp: string;
  description: string;
}

interface LatestActivityProps {
  events: ActivityEvent[];
}

const LatestActivity: React.FC<LatestActivityProps> = ({ events }) => {
  const getEventIcon = (type: 'gps' | 'access' | 'risk') => {
    switch (type) {
      case 'gps':
        return '📍';
      case 'access':
        return '🚪';
      case 'risk':
        return '🛡️';
      default:
        return '•';
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Latest Activity</h3>
      <div className="space-y-2">
        {events.map((event) => (
          <div key={event.id} className="flex items-start">
            <div className="mr-3 mt-1">{getEventIcon(event.type)}</div>
            <div>
              <p className="text-sm">{event.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(event.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestActivity;
