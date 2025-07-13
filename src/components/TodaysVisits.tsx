
import React from 'react';
import { Calendar } from 'lucide-react';

interface Visit {
  id: string;
  facilityCode: string;
  facilityName: string;
  startTime: string;
  endTime: string;
}

interface TodaysVisitsProps {
  visits: Visit[];
}

const TodaysVisits = ({ visits }: TodaysVisitsProps) => {
  if (visits.length === 0) {
    return null;
  }
  
  return (
    <div>
      <div className="flex items-center mb-2">
        <Calendar className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
        <h3 className="font-medium">Today's Visits</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {visits.map((visit) => (
          <div 
            key={visit.id}
            className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm"
          >
            {visit.facilityCode} • {formatTimeRange(visit.startTime, visit.endTime)}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to format time range
function formatTimeRange(start: string, end: string): string {
  return `${formatTime(start)}-${formatTime(end)}`;
}

function formatTime(timeStr: string): string {
  const date = new Date(timeStr);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

export default TodaysVisits;
