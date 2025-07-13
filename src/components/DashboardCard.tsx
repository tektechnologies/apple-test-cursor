
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardCard = ({ children, className }: DashboardCardProps) => {
  return (
    <div 
      className={cn(
        'w-full p-4 rounded-lg glass-card card-shadow mb-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
