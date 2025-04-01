import React from 'react';
import SideBar from '@/app/components/side-bar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SideBar />
      <div className="ml-60">{children}</div>
    </>
  );
}
