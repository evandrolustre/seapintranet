import React from 'react';
import { ClipboardList } from 'lucide-react';

export function InventarioPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Inventário</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <ClipboardList className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Controle de Inventário</h2>
        </div>
        <p className="text-gray-600">Controle patrimonial</p>
      </div>
    </div>
  );
}