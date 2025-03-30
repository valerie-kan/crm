import React from 'react';
import SideBar from '@/app/components/side-bar';
// import { usePathname } from 'next/navigation';
// import Header from '@/app/components/header';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const pathname = usePathname(); // Отримуємо URL сторінки
  // const pageTitle = pathname.includes('companies') ? 'Companies' : 'Dashboard';

  return (
    <>
      <SideBar />
      <div className="ml-60">{children}</div>
    </>
  );
}
