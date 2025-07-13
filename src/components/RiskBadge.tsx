
import React from 'react';
import { cn } from '@/lib/utils';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const RiskBadge = ({ level, className, size = 'lg' }: RiskBadgeProps) => {
  const riskColorClass = 
    level === 'LOW' 
      ? 'bg-success text-white' 
      : level === 'MEDIUM'
        ? 'bg-warning text-black'
        : 'bg-danger text-white';
  
  const sizeClass = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-[56px] h-[56px] text-base',
  }[size];
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div 
        className={cn(
          'hex-badge flex items-center justify-center shadow-md animate-pulse-badge', 
          riskColorClass,
          sizeClass
        )}
      >
        <span className="font-bold">{level.charAt(0)}</span>
      </div>
      <div className="text-xs mt-1 font-medium">
        Global Risk = {level}
      </div>
    </div>
  );
};

export default RiskBadge;
