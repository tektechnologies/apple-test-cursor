
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from './use-toast';

export interface Task {
  id: string;
  task_type: string;
  status: string;
  due_at: string | null;
  parent_type: string | null;
  parent_id: string | null;
  created_at: string;
  subject_user_id: string | null;
  assigner_id: string | null;
  blocked_by: string[] | null;
  priority: string | null;
  payload: any;
}

export const useUserTasks = (limit?: number, status?: string[]) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const fetchUserTasks = async (): Promise<Task[]> => {
    if (!user) return [];
    
    try {
      console.log('Fetching tasks for user:', user.id);
      console.log('Status filter:', status);
      
      let query = supabase
        .from('tasks')
        .select('*');
      
      // Always filter by the current user
      query = query.eq('subject_user_id', user.id);
      
      // Apply status filter if provided
      if (status && status.length > 0) {
        query = query.in('status', status);
      }
      
      // Apply limit if provided
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching user tasks:', error);
        toast({
          title: 'Error',
          description: 'Failed to load task data',
          variant: 'destructive',
        });
        return [];
      }
      
      console.log('Tasks fetched:', data?.length || 0, data);
      return data as Task[];
    } catch (error) {
      console.error('Unexpected error in useUserTasks:', error);
      toast({
        title: 'Error',
        description: 'Failed to load tasks data',
        variant: 'destructive',
      });
      return [];
    }
  };
  
  return useQuery({
    queryKey: ['userTasks', user?.id, limit, status?.join(',')],
    queryFn: fetchUserTasks,
    enabled: !!user,
  });
};
