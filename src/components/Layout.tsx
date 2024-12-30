import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#004a80] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://www.seap.pr.gov.br/sites/seap/files/imce-images/2023-05/logo_seap_branca.png" 
                alt="SEAP PR Logo" 
                className="h-8"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-[#003d6b] rounded-full">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-[#003d6b] rounded-full">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-[#003d6b] rounded-full">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}