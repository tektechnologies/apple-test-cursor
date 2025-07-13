
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useAlerts } from '@/contexts/AlertsContext';

const AlertsPage = () => {
  const { markAsRead, getUnreadAlerts, getAllAlerts } = useAlerts();
  
  const unreadAlerts = getUnreadAlerts();
  const allAlerts = getAllAlerts();
  
  const renderAlertBadge = (severity: string) => {
    const classes = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800',
    }[severity];
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${classes}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };
  
  const renderAlertItem = (alert: any) => (
    <div 
      key={alert.id}
      className={`p-4 border-b last:border-b-0 ${!alert.isRead ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
      onClick={() => markAsRead(alert.id)}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium">{alert.title}</h3>
        {renderAlertBadge(alert.severity)}
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{alert.message}</p>
      <div className="text-xs text-gray-500">
        {new Date(alert.timestamp).toLocaleString()}
      </div>
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-brandPurple">Alerts Center</h1>
      
      <Tabs defaultValue="unread" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="unread">
            Unread {unreadAlerts.length > 0 && `(${unreadAlerts.length})`}
          </TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
        
        <TabsContent value="unread" className="rounded-lg shadow-sm border">
          {unreadAlerts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No unread alerts</p>
            </div>
          ) : (
            unreadAlerts.map(renderAlertItem)
          )}
        </TabsContent>
        
        <TabsContent value="all" className="rounded-lg shadow-sm border">
          {allAlerts.map(renderAlertItem)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlertsPage;
