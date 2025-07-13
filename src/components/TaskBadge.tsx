
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TaskBadgeProps {
  status: string;
  className?: string;
}

const TaskBadge = ({ status, className }: TaskBadgeProps) => {
  let badgeStyle = '';
  let displayStatus = status.replace(/_/g, ' ');
  
  switch (status.toLowerCase()) {
    case 'pending':
      badgeStyle = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'in_progress':
      badgeStyle = 'bg-blue-200 text-blue-800 hover:bg-blue-300';
      break;
    case 'completed':
      badgeStyle = 'bg-green-200 text-green-800 hover:bg-green-300';
      break;
    case 'overdue':
      badgeStyle = 'bg-red-200 text-red-800 hover:bg-red-300';
      break;
    case 'open':
      badgeStyle = 'bg-purple-200 text-purple-800 hover:bg-purple-300';
      break;
    case 'approved':
      badgeStyle = 'bg-green-200 text-green-800 hover:bg-green-300';
      break;
    default:
      badgeStyle = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }
  
  return (
    <Badge className={cn(badgeStyle, className)} variant="outline">
      {displayStatus}
    </Badge>
  );
};

export default TaskBadge;
