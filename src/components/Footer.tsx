import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <span className={styles.footerBrandName}>Atithi Motors</span>
            <p className={styles.footerBrandDesc}>
              TATA Motors Authorized Service Center and Genuine DEF/Urea dealer serving Ghazipur district since 2018. Trusted by thousands of vehicle owners and fleet operators.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
              <a href="tel:7518951555" className="btn-primary" style={{ fontSize: '13px', padding: '9px 18px' }}>📞 7518951555</a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <div className={styles.footerColTitle}>Quick Links</div>
            <ul className={styles.footerLinks}>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#def">DEF / Urea</Link></li>
              <li><Link href="/#branches">Branches</Link></li>
              <li><Link href="/#testimonials">Testimonials</Link></li>
              <li><Link href="/#contact">Book a Service</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services links">
            <div className={styles.footerColTitle}>Services</div>
            <ul className={styles.footerLinks}>
              <li><Link href="/#services">Periodic Servicing</Link></li>
              <li><Link href="/#services">Engine Repair</Link></li>
              <li><Link href="/#services">Denting &amp; Painting</Link></li>
              <li><Link href="/#services">Wheel Alignment</Link></li>
              <li><Link href="/#services">Ceramic Coating</Link></li>
              <li><Link href="/#services">Insurance Claims</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Atithi Motors. All rights reserved. · TATA Authorized · Est. 2018 · Ghazipur, UP</span>
          <span>NH-29, Fatehullahpur, Ghazipur — 233302</span>
        </div>
      </div>
    </footer>
  );
}
