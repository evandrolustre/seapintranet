import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { departments } from '../constants/departments';
import * as Icons from 'lucide-react';

interface SubMenuItem {
  id: string;
  title: string;
  path: string;
}

interface DepartmentMenuItems {
  [key: string]: SubMenuItem[];
}

const departmentMenuItems: DepartmentMenuItems = {
  dgrh: [
    { id: 'processos', title: 'Processos', path: '/dgrh/processos' },
    { id: 'servidores', title: 'Servidores', path: '/dgrh/servidores' },
    { id: 'capacitacao', title: 'Capacitação', path: '/dgrh/capacitacao' }
  ],
  deto: [
    { id: 'frota', title: 'Frota', path: '/deto/frota' },
    { id: 'manutencao', title: 'Manutenção', path: '/deto/manutencao' },
    { id: 'documentacao', title: 'Documentação', path: '/deto/documentacao' }
  ],
  deap: [
    { id: 'imoveis', title: 'Imóveis', path: '/deap/imoveis' },
    { id: 'inventario', title: 'Inventário', path: '/deap/inventario' },
    { id: 'cessao', title: 'Cessão', path: '/deap/cessao' }
  ]
};

export function Sidebar() {
  const location = useLocation();
  const [expandedDept, setExpandedDept] = useState<string | null>(() => {
    const path = location.pathname;
    return Object.keys(departmentMenuItems).find(dept => path.includes(dept)) || null;
  });

  const toggleDepartment = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  return (
    <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] fixed overflow-y-auto">
      <nav className="mt-5 px-2">
        <Link to="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-800">
          <Home className="mr-3 h-5 w-5" />
          Início
        </Link>

        <div className="mt-4">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Departamentos
          </h3>
          <div className="mt-2 space-y-1">
            {departments.map((dept) => {
              const IconComponent = Icons[dept.icon as keyof typeof Icons];
              const isExpanded = expandedDept === dept.id;
              const subItems = departmentMenuItems[dept.id] || [];

              return (
                <div key={dept.id}>
                  <button
                    onClick={() => toggleDepartment(dept.id)}
                    className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    <span className="flex-1 text-left">{dept.shortName}</span>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="pl-10 space-y-1">
                      {subItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`block py-2 px-2 text-sm rounded-md ${
                            location.pathname === item.path
                              ? 'bg-blue-50 text-blue-800'
                              : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}