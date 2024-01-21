'use client';

import { IUser } from '@/types/User';
import EyeIcon from '../Icons/EyeIcon';
import Link from 'next/link';

export default function UserTableRow(user: { user: IUser }) {
  return (
    <>
      <tr>
        <td className="border border-slate-300 p-2 pl-4">{user.user.name}</td>
        <td className="border border-slate-300 p-2 pl-4">
          {user.user.username}
        </td>
        <td className="border border-slate-300 p-2 pl-4">{user.user.phone}</td>
        <td className="border border-slate-300 p-2 pl-4">
          {user.user.company.name}
        </td>
        <td className="border border-slate-300 p-2 pl-4 hover:scale-110 transition cursor-pointer">
          <Link href={`users/${user.user.id}`}>
            <EyeIcon />
          </Link>
        </td>
      </tr>
    </>
  );
}
