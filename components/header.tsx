'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Client Page', href: '/posts' },
    { name: 'Server Page', href: '/users' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center space-x-4">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={
                isActive ? 'text-red-600 font-bold' : 'text-black font-bold'
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
