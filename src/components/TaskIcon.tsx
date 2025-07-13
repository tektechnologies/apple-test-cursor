
import React from 'react';
import { FileCheck, ClipboardCheck, ShieldCheck, Calendar, Clock, CheckSquare, FileText } from 'lucide-react';

interface TaskIconProps {
  taskType: string;
  className?: string;
  size?: number;
}

const TaskIcon = ({ taskType, className, size = 16 }: TaskIconProps) => {
  switch (taskType) {
    case 'biosecurity_form':
      return <FileCheck className={className} size={size} />;
    case 'admin_approval':
      return <ShieldCheck className={className} size={size} />;
    case 'schedule':
      return <Calendar className={className} size={size} />;
    case 'access_request':
      return <FileText className={className} size={size} />;
    case 'follow_up':
      return <Clock className={className} size={size} />;
    case 'complete':
      return <CheckSquare className={className} size={size} />;
    default:
      return <ClipboardCheck className={className} size={size} />;
  }
};

export default TaskIcon;
