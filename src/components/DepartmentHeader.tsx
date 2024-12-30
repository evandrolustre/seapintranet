import React from 'react';
import { departments } from '../constants/departments';
import * as Icons from 'lucide-react';

interface DepartmentHeaderProps {
  departmentId: string;
}

export function DepartmentHeader({ departmentId }: DepartmentHeaderProps) {
  const department = departments.find(d => d.id === departmentId);
  if (!department) return null;

  const IconComponent = Icons[department.icon as keyof typeof Icons];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{department.name}</h1>
          <p className="text-gray-600">{department.shortName}</p>
        </div>
      </div>
    </div>
  );
}