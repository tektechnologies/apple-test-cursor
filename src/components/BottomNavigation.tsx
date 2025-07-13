
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Building2, User } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/map', label: 'Map', icon: Map },
    { path: '/access', label: 'Access', icon: Building2 },
    { path: '/profile', label: 'Profile', icon: User },
  ];
  
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
        >
          <item.icon size={24} />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
