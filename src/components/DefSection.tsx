import styles from './DefSection.module.css';

export default function DefSection() {
  return (
    <section id="def" className={styles.def}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-label">DEF / AdBlue / Urea</div>
          <h2 className="section-title" style={{ marginBottom: '10px' }}>
            Don&apos;t Risk Your BS6 Engine —<br /><span>Use Only Genuine Urea.</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--gray)', maxWidth: '560px', margin: '0 auto' }}>
            Authorized dealer for Tata Genuine DEF. Mandatory for all BS6 diesel vehicles to meet India&apos;s emission norms.
          </p>
        </div>

        <div className={styles.defInner}>
          {/* LEFT */}
          <div className={`${styles.defLeft} reveal`}>
            <div className={styles.defWhat}>
              <div className={styles.defWhatTitle}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" stroke="#1A4FA0" strokeWidth="1.5" />
                  <path d="M9 5v5M9 13v.5" stroke="#1A4FA0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                What is DEF / AdBlue?
              </div>
              <p className={styles.defWhatText}>
                DEF (Diesel Exhaust Fluid), also called AdBlue or Urea, is a mandatory solution for all BS6 diesel vehicles. It is injected into the exhaust stream and uses SCR (Selective Catalytic Reduction) technology to reduce harmful NOx emissions by up to 90%, keeping your vehicle emission-compliant.
              </p>
            </div>

            <div className={styles.defWhat}>
              <div className={styles.defWhatTitle}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="#1A4FA0" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                Fleet Operators &amp; Truck Owners
              </div>
              <p className={styles.defWhatText}>
                Downtime is money. Running out of DEF stops your vehicle in its tracks — BS6 trucks and buses will derate and halt without it. Keep a regular supply and protect your fleet operations from unexpected disruption.
              </p>
            </div>

            <div className={styles.defWarning}>
              <div className={styles.defWarningTitle}>⚠️ Why Buy Genuine DEF?</div>
              <p className={styles.defWarningText}>
                Counterfeit or diluted DEF can permanently damage your SCR system — repairs cost <strong>₹50,000 or more</strong>. Always buy ISO 22241 certified DEF from an authorized center like Atithi Motors. Don&apos;t let cheap urea cost you lakhs.
              </p>
            </div>

            <a href="tel:7518951555" className="btn-primary">Order DEF Now — Call 7518951555</a>
          </div>

          {/* RIGHT */}
          <div className={`${styles.defRight} reveal`} style={{ transitionDelay: '0.15s' }}>
            <div className={styles.defProductsTitle}>Available Pack Sizes</div>
            <div className={styles.bentoDef}>
              <div className={`${styles.defProdCell} ${styles.featured} ${styles.dp20lFeatured}`}>
                <div className={styles.dpBigNum} aria-hidden="true">20</div>
                <div>
                  <div className={styles.dpBadge}>BEST SELLER</div>
                  <div className={styles.dpSize}>20L</div>
                  <div className={styles.dpType}>Jerry Can</div>
                </div>
              </div>
              <div className={`${styles.defProdCell} ${styles.dp3l}`}>
                <div className={styles.dpIcon}>🧴</div>
                <div className={styles.dpSize}>3L</div>
                <div className={styles.dpType}>Can</div>
              </div>
              <div className={`${styles.defProdCell} ${styles.dp5l}`}>
                <div className={styles.dpIcon}>🧴</div>
                <div className={styles.dpSize}>5L</div>
                <div className={styles.dpType}>Can</div>
              </div>
              <div className={`${styles.defProdCell} ${styles.dp10l}`}>
                <div className={styles.dpIcon}>🪣</div>
                <div className={styles.dpSize}>10L</div>
                <div className={styles.dpType}>Jerry Can</div>
              </div>
              <div className={`${styles.defProdCell} ${styles.dp20lBucket}`}>
                <div className={styles.dpIcon}>🪣</div>
                <div className={styles.dpSize}>20L</div>
                <div className={styles.dpType}>Bucket</div>
              </div>
            </div>

            <div className={styles.defCert}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#1A4FA0" strokeWidth="1.5" />
                <path d="M4.5 7l1.5 1.5L9.5 5" stroke="#1A4FA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ISO 22241 Certified · Tata Genuine
            </div>

            <div className={styles.defAudience}>
              🚛 Specifically stocked for fleet operators, bus operators, and logistics companies across Ghazipur district. Bulk orders welcome.
            </div>

            <div className={styles.scrFacts}>
              <div className={styles.scrTitle}>SCR System Facts</div>
              <div className={styles.scrList}>
                <div className={styles.scrItem}><span className={styles.check}>✓</span> Reduces NOx emissions by up to 90%</div>
                <div className={styles.scrItem}><span className={styles.check}>✓</span> Mandatory for all BS6 diesel vehicles in India</div>
                <div className={styles.scrItem}><span className={styles.check}>✓</span> Vehicle will derate / stop without sufficient DEF</div>
                <div className={styles.scrItem}><span className={styles.cross}>✗</span> SCR repair cost: ₹50,000+ with fake DEF</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.stationsWrapper} reveal`}>
          <div className={styles.stationsHeader}>
            <h3 className={styles.stationsTitle}>Genuine DEF <span>Filling Points</span></h3>
            <p className={styles.stationsSubtitle}>Available across key transport routes in Eastern UP</p>
          </div>

          <div className={styles.stationsGrid}>
            {[
              { name: 'Ghazipur', status: 'Active', icon: '📍' },
              { name: 'Mohammdabad', status: 'Active', icon: '📍' },
              { name: 'Kaithi', status: 'Active', icon: '📍' },
              { name: 'Sandaha', status: 'Coming Soon', icon: '🚧' },
              { name: 'Jaunpur', status: 'Coming Soon', icon: '🚧' },
              { name: 'Badhalganj', status: 'Coming Soon', icon: '🚧' },
            ].map((station, i) => (
              <div
                key={station.name}
                className={`${styles.stationCard} ${station.status === 'Active' ? styles.active : styles.upcoming}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.stationIcon}>{station.icon}</div>
                <div className={styles.stationName}>{station.name}</div>
                <div className={styles.stationStatus}>{station.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
