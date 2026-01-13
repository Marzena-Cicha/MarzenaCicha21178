import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import classes from './main-header.module.css';

import logoImg from '../assets/logo.png';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <MainHeaderBackground />

      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="Logo NextLevel Food" priority />
        <span>NextLevel Food</span>
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  );
}
