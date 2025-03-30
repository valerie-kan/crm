import React from 'react';
import './globals.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
// import SideBar from '@/app/components/side-bar';

const fontFamily = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--second-family',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontFamily.variable}>
      <body>{children}</body>
    </html>
  );
}
