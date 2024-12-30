import React from 'react';
import { FileText } from 'lucide-react';

export function DocumentacaoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Documentação</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-semibold">Documentos</h2>
        </div>
        <p className="text-gray-600">Documentos e licenciamentos</p>
      </div>
    </div>
  );
}