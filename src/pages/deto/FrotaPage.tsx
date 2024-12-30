import React from 'react';
import { Car } from 'lucide-react';

export function FrotaPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Frota</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Car className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Gestão de Frota</h2>
        </div>
        <p className="text-gray-600">Gestão e controle da frota oficial</p>
      </div>
    </div>
  );
}