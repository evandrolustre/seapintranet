import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface ContactCardProps {
  contact: ContactInfo;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações de Contato</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-600">{contact.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-600">{contact.email}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-600">{contact.address}</span>
        </div>
      </div>
    </div>
  );
}