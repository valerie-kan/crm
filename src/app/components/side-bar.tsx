'use client';

import React from 'react';
import Image from 'next/image';
import SideBarItem from '@/app/components/sidebar-item';
import { usePathname } from 'next/navigation';

export interface SideBarProps {}

export default function SideBar({}: SideBarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-screen bg-gray-900 fixed z-10">
      <div className="flex flex-col h-full ">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="flex flex-col gap-7">
          <SideBarItem
            src="/icons/dashboard.svg"
            alt="Dashbord icon"
            path="/dashboard"
            active={pathname === '/dashboard'}
          >
            Dashboard
          </SideBarItem>
          <SideBarItem
            src="/icons/briefcase.svg"
            alt="Companies icon"
            path="/companies"
            active={pathname === '/companies'}
          >
            Companies
          </SideBarItem>
        </ul>
        <button className="flex items-center gap-2 mx-auto mt-auto pb-10">
          <Image width={18} height={18} src="/icons/exit.svg" alt="Exit icon" />{' '}
          <span className="font-medium text-base text-zinc-50">Exit</span>
        </button>
      </div>
    </aside>
  );
}
