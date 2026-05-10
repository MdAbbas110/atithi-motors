'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const FACILITIES = [
  {
    id: 'passenger',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" width="36" height="36">
        <rect x="4" y="16" width="32" height="14" rx="4" fill="#1A4FA0" opacity="0.12"/>
        <path d="M6 22l4-8h20l4 8" stroke="#1A4FA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="22" width="32" height="8" rx="3" fill="#1A4FA0" opacity="0.9"/>
        <circle cx="11" cy="31" r="3" fill="#FF6B00"/>
        <circle cx="29" cy="31" r="3" fill="#FF6B00"/>
        <path d="M16 22h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Passenger Vehicles',
    desc: 'Cars, SUVs & MPVs',
    color: '#1A4FA0',
    accent: 'rgba(26,79,160,0.08)',
  },
  {
    id: 'commercial',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" width="36" height="36">
        <rect x="4" y="18" width="24" height="12" rx="3" fill="#FF6B00" opacity="0.15"/>
        <rect x="28" y="22" width="8" height="8" rx="2" fill="#FF6B00" opacity="0.15"/>
        <path d="M4 22h24V18a2 2 0 00-2-2H6a2 2 0 00-2 2v4z" fill="#FF6B00" opacity="0.9"/>
        <rect x="28" y="22" width="8" height="8" rx="2" fill="#FF6B00" opacity="0.8"/>
        <circle cx="10" cy="32" r="3" fill="#1A4FA0"/>
        <circle cx="22" cy="32" r="3" fill="#1A4FA0"/>
        <circle cx="33" cy="32" r="2.5" fill="#1A4FA0"/>
      </svg>
    ),
    label: 'Commercial Vehicles',
    desc: 'Trucks, Buses & LCVs',
    color: '#FF6B00',
    accent: 'rgba(255,107,0,0.08)',
  },
];

const STATS = [
  { num: '7+', label: 'Years of Trust' },
  { num: '5000+', label: 'Vehicles Serviced' },
  { num: '2', label: 'Specialized Facilities' },
  { num: '100%', label: 'Genuine TATA Parts' },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Ambient background layers */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroInner}>

          {/* ── LEFT COLUMN ── */}
          <div className={styles.heroContent}>

            {/* Eyebrow badge */}
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              TATA Authorized Since 2018 · Ghazipur
            </div>

            {/* Brand headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.brandName}>Atithi Motors</span>
              <span className={styles.heroSubTitle}>
                Eastern UP's Premier<br />
                <span className={styles.highlight}>TATA Service Hub</span>
              </span>
            </h1>

            {/* Hindi tagline */}
            <p className={styles.heroHindi}>
              "सेवा, विश्वास, और गुणवत्ता।"
            </p>

            {/* Dual facility cards */}
            <div className={styles.facilityRow}>
              {FACILITIES.map((f) => (
                <div
                  key={f.id}
                  className={styles.facilityCard}
                  style={{ '--fAccent': f.accent, '--fColor': f.color } as React.CSSProperties}
                >
                  <div className={styles.facilityIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.facilityLabel}>{f.label}</div>
                    <div className={styles.facilityDesc}>{f.desc}</div>
                  </div>
                  <div className={styles.facilityCheck}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Active
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className={styles.heroCtas}>
              <Link href="#contact" className="btn-primary">Book a Service →</Link>
              <a href="tel:7518951555" className="btn-secondary">📞 7518951555</a>
            </div>

            {/* Trust badges */}
            <div className={styles.heroTrust}>
              <div className={styles.trustItem}>
                <svg width="15" height="15" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.5 4.3 12.4l.7-4.1-3-2.9 4.2-.8L8 1z" fill="#1A4FA0"/>
                </svg>
                TATA Authorized
              </div>
              <span className={styles.trustDivider}/>
              <div className={styles.trustItem}>
                <svg width="15" height="15" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="#1A4FA0" strokeWidth="1.5"/>
                  <path d="M5 8l2 2 4-4" stroke="#1A4FA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Genuine Parts Only
              </div>
              <span className={styles.trustDivider}/>
              <div className={styles.trustItem}>
                <svg width="15" height="15" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8S4.4 14.5 8 14.5 14.5 11.6 14.5 8 11.6 1.5 8 1.5z" stroke="#1A4FA0" strokeWidth="1.5"/>
                  <path d="M8 5v3l2 2" stroke="#1A4FA0" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                DEF / Urea Certified
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={styles.heroVisual}>

            {/* Main image card */}
            <div className={styles.heroImageCard}>
              <Image
                src="/hero-workshop.png"
                alt="Atithi Motors workshop — TATA vehicle being serviced by a certified technician"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
                className={styles.heroBgImg}
              />
              {/* Dark overlay gradient */}
              <div className={styles.imgOverlay} aria-hidden="true" />

              {/* Floating TATA badge */}
              <div className={styles.floatingBadge}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#1A4FA0" strokeWidth="1.5"/>
                  <path d="M4 6l1.5 1.5L8 4" stroke="#1A4FA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                TATA Authorized
              </div>

              {/* Floating facility pill — passenger */}
              <div className={`${styles.floatingPill} ${styles.pillPassenger}`}>
                <span className={`${styles.pillDot} ${styles.pillDotBlue}`}/>
                Passenger · Cars &amp; SUVs
              </div>

              {/* Floating facility pill — commercial */}
              <div className={`${styles.floatingPill} ${styles.pillCommercial}`}>
                <span className={`${styles.pillDot} ${styles.pillDotOrange}`}/>
                Commercial · Trucks &amp; Buses
              </div>

              {/* Stats bar */}
              <div className={styles.heroStatRow}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.heroStat}>
                    <div className={styles.heroStatNum}>{s.num}</div>
                    <div className={styles.heroStatLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative glow ring */}
            <div className={styles.glowRing} aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}
