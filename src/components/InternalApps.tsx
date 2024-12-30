import React from 'react';
import { internalApps } from '../constants/internalApps';
import * as Icons from 'lucide-react';

export function InternalApps() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Sistemas Internos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {internalApps.map((app) => {
          const IconComponent = Icons[app.icon as keyof typeof Icons];
          return (
            <a
              key={app.id}
              href={app.url}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <IconComponent className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">{app.name}</span>
              <span className="text-xs text-gray-500 text-center mt-1">{app.description}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}