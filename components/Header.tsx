import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <h1>
            <Link href={'/'}>SteelMind</Link>
        </h1>
        <nav className={styles.navBar}>
            <ul className={styles.navigate}>
                <li>
                    <Link href={'/services'} passHref>
                        <h4>services</h4>
                    </Link>
                </li>
                <li>
                    <Link href={'/about'} passHref>
                        <h4>about</h4>
                    </Link>
                </li>
                <li>
                    <h4>donate</h4>
                </li>
                <li>
                    <h4>work with us</h4>
                </li>
            </ul>
            <ul className={styles.account}>
                <li>
                    <Link href={'/login'} passHref>
                        <h4>logIn</h4>
                    </Link>
                </li>
                <li>
                    <h4>create account</h4>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
