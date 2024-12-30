import React from 'react';
import { Layout } from '../../components/Layout';
import { DepartmentHeader } from '../../components/DepartmentHeader';
import { ContactCard } from '../../components/ContactCard';
import { Car, Tool, FileText } from 'lucide-react';

export function DETOPage() {
  const contactInfo = {
    phone: "(41) 3313-6200",
    email: "deto@seap.pr.gov.br",
    address: "Palácio das Araucárias - R. Jacy Loureiro de Campos, s/n"
  };

  return (
    <Layout>
      <DepartmentHeader departmentId="deto" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Car className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Frota</h3>
          </div>
          <p className="text-gray-600">Gestão e controle da frota oficial</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Tool className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Manutenção</h3>
          </div>
          <p className="text-gray-600">Agendamento e controle de manutenções</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Documentação</h3>
          </div>
          <p className="text-gray-600">Documentos e licenciamentos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactCard contact={contactInfo} />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Serviços</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <Car className="h-4 w-4 mr-2" />
                Agendamento de Veículos
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <Tool className="h-4 w-4 mr-2" />
                Solicitação de Manutenção
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Relatório de Quilometragem
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}