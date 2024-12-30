import React from 'react';
import { Layout } from '../../components/Layout';
import { DepartmentHeader } from '../../components/DepartmentHeader';
import { ContactCard } from '../../components/ContactCard';
import { Building, ClipboardList, Key } from 'lucide-react';

export function DEAPPage() {
  const contactInfo = {
    phone: "(41) 3313-6300",
    email: "deap@seap.pr.gov.br",
    address: "Palácio das Araucárias - R. Jacy Loureiro de Campos, s/n"
  };

  return (
    <Layout>
      <DepartmentHeader departmentId="deap" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Building className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Imóveis</h3>
          </div>
          <p className="text-gray-600">Gestão de imóveis do Estado</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <ClipboardList className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Inventário</h3>
          </div>
          <p className="text-gray-600">Controle patrimonial</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Key className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Cessão</h3>
          </div>
          <p className="text-gray-600">Gestão de cessões e permissões de uso</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactCard contact={contactInfo} />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Formulários</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Solicitação de Espaço
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <ClipboardList className="h-4 w-4 mr-2" />
                Termo de Responsabilidade
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <Key className="h-4 w-4 mr-2" />
                Pedido de Cessão
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}