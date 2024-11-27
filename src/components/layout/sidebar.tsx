import React from 'react';
import { Menu, Home, Calendar, Users, BarChart2, Settings, LogOut, ChefHat, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Menu, label: 'Menu Management', path: '/menu' },
  { icon: ChefHat, label: 'Kitchen Display', path: '/kitchen' },
  { icon: Calendar, label: 'Reservations', path: '/reservations' },
  { icon: Clock, label: 'Orders History', path: '/orders' },
  { icon: Users, label: 'Staff', path: '/staff' },
  { icon: BarChart2, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
] as const;

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <ChefHat className="h-8 w-8 text-emerald-500" />
        <h1 className="text-xl font-bold">Culinary POS</h1>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors absolute bottom-4 w-[calc(100%-2rem)] text-gray-300 hover:text-white">
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}