import React from 'react';
import { Menu, User, Bell } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 lg:hidden" />
            <span className="ml-2 text-xl font-bold text-blue-600">LifeAdvisor AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <User className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}