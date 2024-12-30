import React from 'react';
import { Tool } from 'lucide-react';

export function ManutencaoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Manutenção</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Tool className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Manutenção de Veículos</h2>
        </div>
        <p className="text-gray-600">Agendamento e controle de manutenções</p>
      </div>
    </div>
  );
}