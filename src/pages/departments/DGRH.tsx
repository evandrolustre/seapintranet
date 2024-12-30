import React from 'react';
import { Layout } from '../../components/Layout';
import { DepartmentHeader } from '../../components/DepartmentHeader';
import { ContactCard } from '../../components/ContactCard';
import { FileText, Users, GraduationCap } from 'lucide-react';

export function DGRHPage() {
  const contactInfo = {
    phone: "(41) 3313-6100",
    email: "dgrh@seap.pr.gov.br",
    address: "Palácio das Araucárias - R. Jacy Loureiro de Campos, s/n"
  };

  return (
    <Layout>
      <DepartmentHeader departmentId="dgrh" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Processos</h3>
          </div>
          <p className="text-gray-600">Gestão de processos funcionais e folha de pagamento</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Servidores</h3>
          </div>
          <p className="text-gray-600">Administração de pessoal e benefícios</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Capacitação</h3>
          </div>
          <p className="text-gray-600">Treinamentos e desenvolvimento profissional</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactCard contact={contactInfo} />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Documentos e Formulários</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Manual do Servidor
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Formulário de Férias
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Declaração de Bens
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}