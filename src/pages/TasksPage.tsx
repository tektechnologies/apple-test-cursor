
import React from 'react';
import { useUserTasks } from '@/hooks/useUserTasks';
import TaskIcon from '@/components/TaskIcon';
import TaskBadge from '@/components/TaskBadge';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

const TasksPage = () => {
  const { data: tasks = [], isLoading } = useUserTasks();
  
  console.log("Tasks in TasksPage:", tasks);
  
  // Group tasks by their due date status
  const groupedTasks = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dueToday: typeof tasks = [];
    const overdue: typeof tasks = [];
    const upcoming: typeof tasks = [];
    const noDueDate: typeof tasks = [];
    
    tasks.forEach(task => {
      if (!task.due_at) {
        noDueDate.push(task);
        return;
      }
      
      const dueDate = new Date(task.due_at);
      dueDate.setHours(0, 0, 0, 0);
      
      if (dueDate.getTime() === today.getTime()) {
        dueToday.push(task);
      } else if (dueDate < today) {
        overdue.push(task);
      } else {
        upcoming.push(task);
      }
    });
    
    return { dueToday, overdue, upcoming, noDueDate };
  }, [tasks]);
  
  const formatTaskLabel = (taskType: string): string => {
    switch (taskType) {
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
        return taskType.replace(/_/g, ' ');
    }
  };
  
  const renderTaskList = (taskList: typeof tasks, title: string) => {
    if (taskList.length === 0) return null;
    
    return (
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3">{title}</h3>
        <div className="space-y-3">
          {taskList.map(task => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <TaskIcon taskType={task.task_type} className="text-brandPurple" />
                </div>
                <div>
                  <div className="font-medium">{formatTaskLabel(task.task_type)}</div>
                  {task.due_at && (
                    <div className="text-sm text-gray-500">
                      Due: {format(new Date(task.due_at), 'MMM d, yyyy')}
                    </div>
                  )}
                  {task.parent_type && (
                    <div className="text-sm text-gray-500">
                      Related to: {task.parent_type.replace(/_/g, ' ')}
                    </div>
                  )}
                </div>
              </div>
              <TaskBadge status={task.status} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple">My Tasks</h1>
      
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ) : tasks.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl">🎉 All caught up!</p>
          <p className="text-gray-500 mt-2">You don't have any pending tasks</p>
        </div>
      ) : (
        <>
          {renderTaskList(groupedTasks.dueToday, "Due Today")}
          {renderTaskList(groupedTasks.overdue, "Overdue")}
          {renderTaskList(groupedTasks.upcoming, "Upcoming")}
          {renderTaskList(groupedTasks.noDueDate, "No Due Date")}
        </>
      )}
    </div>
  );
};

export default TasksPage;
