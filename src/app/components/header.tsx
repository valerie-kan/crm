import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="flex items-center py-6 pl-10 pr-7 justify-between border-b border-gray-300">
      <p className="font-semibold text-3xl text-gray-900">{children}</p>
      <div className="flex gap-3 border-l border-gray-300">
        <Image
          className="rounded-full ml-9"
          src="/images/photo.png"
          alt="Avatar"
          width={44}
          height={44}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-base text-gray-900">Adam Smith</p>
          <p className="font-light text-sm text-gray-900">
            adamsmith@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
