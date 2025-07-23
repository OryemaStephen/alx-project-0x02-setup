import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="max-w-md rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">
              {name}               
            </h2>
            <span className="text-gray-500">@{username}</span>
            <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex items-start">
            <span className="material-symbols-outlined mr-2 text-gray-400">mail</span>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline break-all">
              {email}
            </a>
          </div>
          <div className="flex items-start">
            <span className="material-symbols-outlined mr-2 text-gray-400">call</span>
            <a href={`tel:${phone}`} className="text-gray-700 hover:text-blue-600">
              {phone}
            </a>
          </div>
          <div className="flex items-start">
            <span className="material-symbols-outlined mr-2 text-gray-400">website</span>
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {website}
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-5">
          <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
            <span className="material-symbols-outlined mr-2 text-gray-400">location_on</span>
            Address
          </h3>
          <address className="not-italic text-gray-600">
            <p>{address.street}, {address.suite}</p>
            <p>{address.city}, {address.zipcode}</p>
            <p>{address.geo.lat}, {address.geo.lng}</p>
          </address>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
            <span className="material-symbols-outlined mr-2 text-gray-400">business</span>
            Company
          </h3>
          <div className="text-gray-600">
            <p className="font-medium">{company.name}</p>
            <p className="italic mt-1">{company.catchPhrase}</p>
            <p className="text-sm mt-1 text-gray-500">{company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;