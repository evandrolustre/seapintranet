import React from 'react';
import { Building } from 'lucide-react';

export function ImoveisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Imóveis</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Building className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Gestão de Imóveis</h2>
        </div>
        <p className="text-gray-600">Gestão de imóveis do Estado</p>
      </div>
    </div>
  );
}