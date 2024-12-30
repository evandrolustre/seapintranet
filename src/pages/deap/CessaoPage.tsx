import React from 'react';
import { Key } from 'lucide-react';

export function CessaoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Cessão</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Key className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Gestão de Cessões</h2>
        </div>
        <p className="text-gray-600">Gestão de cessões e permissões de uso</p>
      </div>
    </div>
  );
}