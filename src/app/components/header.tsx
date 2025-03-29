import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="flex items-center py-6 pl-10 pr-7 w justify-between border-b border-gray-300">
      <p className="font-semibold text-3xl text-gray-900">{children}</p>
      <div>
        <Image
          src="/images/photo.png"
          alt="Avatar"
          width={44}
          height={44}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
