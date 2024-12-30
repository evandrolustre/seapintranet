import React from 'react';
import { InternalApps } from '../components/InternalApps';

export function HomePage() {
  return (
    <div className="space-y-6">
      {/* Notícias em Destaque */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Notícias em Destaque</h2>
        <div className="bg-blue-50 border-l-4 border-[#004a80] p-4">
          <h3 className="font-semibold text-[#004a80]">Novo Sistema de Gestão</h3>
          <p className="text-gray-600 mt-1">
            Implementação do novo sistema de gestão prevista para o próximo mês...
          </p>
        </div>
      </div>

      {/* Sistemas Internos */}
      <InternalApps />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendário */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Eventos</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-blue-100 text-[#004a80] px-2 py-1 rounded">
                15/03
              </div>
              <p className="ml-3 text-gray-600">Reunião Departamental</p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-[#004a80] px-2 py-1 rounded">
                20/03
              </div>
              <p className="ml-3 text-gray-600">Treinamento RH</p>
            </div>
          </div>
        </div>

        {/* Comunicados */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Comunicados</h2>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">12/03/2024</p>
              <p className="text-gray-700">Manutenção programada dos sistemas...</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">10/03/2024</p>
              <p className="text-gray-700">Novo procedimento para solicitações...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}