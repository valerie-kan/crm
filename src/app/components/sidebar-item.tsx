'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export interface SideBarItemProps {
  active: boolean;
  path: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SideBarItem({
  active,
  src,
  alt,
  children,
  path,
}: SideBarItemProps) {
  return (
    <li>
      <Link
        href={path}
        className={clsx(
          'flex items-center ml-6 mr-1 w-full gap-3.5',
          active && 'after:w-1, after:h-full, after:bg-purple-200',
        )}
      >
        <Image width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-base text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
