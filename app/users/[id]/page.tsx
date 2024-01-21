'use client';

import { IUser } from '@/types/User';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function DetailUserPage() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<IUser>();

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => setUserDetails(data));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Name: </span>
          <span>{userDetails?.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">User name: </span>
          <span>{userDetails?.username}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Email: </span>
          <span>{userDetails?.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Address: </span>
          <span>
            {userDetails?.address.street} - {userDetails?.address.city}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Phone: </span>
          <span>{userDetails?.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Website: </span>
          <span>{userDetails?.website}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base">Company: </span>
          <span>{userDetails?.company.name}</span>
        </div>
      </div>
    </div>
  );
}
