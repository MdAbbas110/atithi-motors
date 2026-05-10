'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className={styles.navInner}>
            <Link href="/#home" className={styles.navLogo} aria-label="Atithi Motors — Home">
              <img src="/logo.jpg" alt="Atithi Motors Logo" className={styles.navLogoImage} />
              <div>
                <div className={styles.navLogoText}>Atithi Motors</div>
                <div className={styles.navLogoSub}>TATA AUTHORIZED · GHAZIPUR</div>
              </div>
            </Link>

            <ul className={styles.navLinks} role="list">
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/passenger-vehicle-services">Passenger Services</Link></li>
              <li><Link href="/#services">Workshop</Link></li>
              <li><Link href="/#def">DEF/Urea</Link></li>
              <li><Link href="/#contact">Book Service</Link></li>
            </ul>

            <div className={styles.navCta}>
              <a href="tel:7518951555" className={styles.navCall} aria-label="Call Atithi Motors at 7518951555">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2h3l1.5 3.5-1.5 1a8 8 0 004 4l1-1.5L13.5 10.5v3A1.5 1.5 0 0112 15C5.4 15 0 9.6 0 3a1.5 1.5 0 011.5-1.5L2 2z" fill="#1A4FA0"/>
                </svg>
                7518951555
              </a>
              <Link href="/#contact" className="btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>Book Service</Link>
            </div>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              id="hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} id="mobileMenu" aria-hidden={!menuOpen}>
        <Link href="/#home" onClick={closeMenu}>Home</Link>
        <Link href="/passenger-vehicle-services" onClick={closeMenu}>Passenger Services</Link>
        <Link href="/#services" onClick={closeMenu}>Workshop</Link>
        <Link href="/#def" onClick={closeMenu}>DEF/Urea</Link>
        <Link href="/#contact" onClick={closeMenu}>Book Service</Link>
        <a href="tel:7518951555" style={{ color: 'var(--blue)', fontWeight: 600 }}>📞 7518951555</a>
      </div>
    </>
  );
}
