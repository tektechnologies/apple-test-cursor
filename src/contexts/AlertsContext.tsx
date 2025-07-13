
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Alert {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  severity: 'low' | 'medium' | 'high';
}

// Mock data for alerts - this would typically come from an API
const mockAlerts: Alert[] = [
  { 
    id: '1', 
    title: 'Risk Level Changed', 
    message: 'Your global risk level has changed to LOW.', 
    timestamp: '2025-05-01T14:30:00', 
    isRead: false,
    severity: 'low'
  },
  { 
    id: '2', 
    title: 'Access Request Approved', 
    message: 'Your request to access Farm Alpha has been approved.', 
    timestamp: '2025-05-01T12:15:00', 
    isRead: false,
    severity: 'medium'
  },
  { 
    id: '3', 
    title: 'Vehicle Association', 
    message: 'Vehicle ABC-123 has been associated with your account.', 
    timestamp: '2025-04-30T16:45:00', 
    isRead: true,
    severity: 'low'
  },
  { 
    id: '4', 
    title: 'Access Code Updated', 
    message: 'Your access code has been updated. Please check your profile.', 
    timestamp: '2025-04-30T10:20:00', 
    isRead: true,
    severity: 'high'
  },
];

interface AlertsContextType {
  alerts: Alert[];
  unreadCount: number;
  markAsRead: (alertId: string) => void;
  getUnreadAlerts: () => Alert[];
  getAllAlerts: () => Alert[];
}

const AlertsContext = createContext<AlertsContextType | undefined>(undefined);

export const useAlerts = () => {
  const context = useContext(AlertsContext);
  if (!context) {
    throw new Error('useAlerts must be used within an AlertsProvider');
  }
  return context;
};

interface AlertsProviderProps {
  children: ReactNode;
}

const ALERTS_STORAGE_KEY = 'orbitag_alerts';

const loadAlertsFromStorage = (): Alert[] => {
  try {
    const stored = localStorage.getItem(ALERTS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading alerts from localStorage:', error);
  }
  return mockAlerts;
};

const saveAlertsToStorage = (alerts: Alert[]) => {
  try {
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(alerts));
  } catch (error) {
    console.error('Error saving alerts to localStorage:', error);
  }
};

export const AlertsProvider = ({ children }: AlertsProviderProps) => {
  const [alerts, setAlerts] = useState<Alert[]>(() => loadAlertsFromStorage());
  const [unreadCount, setUnreadCount] = useState<number>(0);

  // Calculate the unread count whenever alerts change
  useEffect(() => {
    const count = alerts.filter(alert => !alert.isRead).length;
    setUnreadCount(count);
  }, [alerts]);

  // Save to localStorage whenever alerts change
  useEffect(() => {
    saveAlertsToStorage(alerts);
  }, [alerts]);

  const markAsRead = (alertId: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId 
        ? { ...alert, isRead: true } 
        : alert
    ));
  };

  const getUnreadAlerts = () => {
    return alerts.filter(alert => !alert.isRead);
  };

  const getAllAlerts = () => {
    return [...alerts];
  };

  const value = {
    alerts,
    unreadCount,
    markAsRead,
    getUnreadAlerts,
    getAllAlerts,
  };

  return (
    <AlertsContext.Provider value={value}>
      {children}
    </AlertsContext.Provider>
  );
};
