'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './main-header.module.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${classes.link} ${isActive ? classes.active : ''}`}
    >
      {children}
    </Link>
  );
}
