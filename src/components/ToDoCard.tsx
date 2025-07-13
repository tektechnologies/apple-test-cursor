
import React from 'react';
import { ChevronRight } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { Task } from '@/hooks/useUserTasks';
import TaskIcon from './TaskIcon';
import TaskBadge from './TaskBadge';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface ToDoCardProps {
  tasks: Task[];
  isLoading: boolean;
}

const ToDoCard = ({ tasks, isLoading }: ToDoCardProps) => {
  const navigate = useNavigate();
  
  const formatTaskLabel = (task: Task): string => {
    switch (task.task_type) {
      case 'biosecurity_form':
        return 'Complete biosecurity form';
      case 'admin_approval':
        return 'Admin approval required';
      case 'schedule':
        return 'Schedule visit';
      case 'access_request':
        return 'Access request';
      case 'follow_up':
        return 'Follow up required';
      default:
        return task.task_type?.replace(/_/g, ' ') || 'Unknown task';
    }
  };
  
  const formatDueDate = (dateString: string | null): string => {
    if (!dateString) return 'No due date';
    
    const dueDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (dueDate.getTime() === today.getTime()) {
      return 'Today';
    } else if (dueDate.getTime() === tomorrow.getTime()) {
      return 'Tomorrow';
    } else {
      return dueDate.toLocaleDateString();
    }
  };
  
  const handleViewAll = () => {
    navigate('/tasks');
  };
  
  return (
    <DashboardCard>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <h3 className="font-medium">To-Dos</h3>
          {tasks.length > 0 && (
            <Badge className="ml-2 bg-brandPurple" variant="default">
              {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
            </Badge>
          )}
        </div>
        {tasks.length > 0 && (
          <button 
            onClick={handleViewAll}
            className="text-sm text-brandPurple flex items-center"
          >
            View all <ChevronRight size={16} />
          </button>
        )}
      </div>
      
      {isLoading ? (
        <div className="py-4 text-center text-gray-500">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="py-4 text-center text-gray-500">
          🎉 No pending tasks!
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex-grow">
                <div className="flex items-center">
                  <TaskIcon taskType={task.task_type} className="text-brandPurple mr-2" />
                  <span className="font-medium">{formatTaskLabel(task)}</span>
                </div>
                {task.due_at && (
                  <div className="text-xs text-gray-500 mt-1">
                    Due: {formatDueDate(task.due_at)}
                  </div>
                )}
                {task.parent_type && (
                  <div className="text-xs text-gray-500">
                    Related to: {task.parent_type.replace(/_/g, ' ')}
                  </div>
                )}
              </div>
              <TaskBadge status={task.status} />
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
};

export default ToDoCard;
