import styles from './Branches.module.css';

export default function Branches() {
  return (
    <section id="branches" className={styles.branches}>
      <div className="container">
        <div className={`${styles.branchesHeader} reveal`}>
          <div className="section-label">Our Locations</div>
          <h2 className="section-title">Find Us <span>Near You</span></h2>
          <p style={{ fontSize: '15px', color: 'var(--gray)', marginTop: '10px' }}>
            Multiple service points across Ghazipur district — always within reach.
          </p>
        </div>

        <div className={styles.branchesGrid}>
          {/* Main Branch */}
          <article className={`${styles.branchCard} ${styles.mainBranch} reveal`}>
            <div className={styles.branchIcon} aria-hidden="true">📍</div>
            <h3 className={styles.branchName}>Main Branch — NH-29</h3>
            <address className={styles.branchAddress}>
              In front of Jio Petrol Pump, Fatehullahpur, National Highway 29<br />
              Ghazipur, Uttar Pradesh — 233302
            </address>
            <div className={styles.branchTiming}>
              <span className={styles.greenDot}></span>
              Opens 9:00 AM Daily
            </div>
            <div style={{ marginTop: '14px' }}>
              <a href="tel:7518951555" className={styles.branchPhone} aria-label="Call Main Branch at 7518951555">
                📞 7518951555
              </a>
            </div>
          </article>

          {/* Coming Soon 2 */}
          <article className={`${styles.branchCard} ${styles.comingSoon} reveal`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.branchIcon} style={{ opacity: 0.4 }} aria-hidden="true">📍</div>
            <h3 className={styles.branchName} style={{ color: 'var(--gray-light)' }}>Branch 2 — Ghazipur</h3>
            <p className={styles.branchAddress} style={{ color: 'var(--gray-light)' }}>
              Location details will be announced soon. We are expanding our network across the district.
            </p>
            <div className={styles.expandingSoon}>🚧 Expanding Soon</div>
          </article>

          {/* Coming Soon 3 */}
          <article className={`${styles.branchCard} ${styles.comingSoon} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.branchIcon} style={{ opacity: 0.4 }} aria-hidden="true">📍</div>
            <h3 className={styles.branchName} style={{ color: 'var(--gray-light)' }}>Branch 3 — Ghazipur</h3>
            <p className={styles.branchAddress} style={{ color: 'var(--gray-light)' }}>
              We are committed to bringing TATA authorized service closer to every corner of Ghazipur.
            </p>
            <div className={styles.expandingSoon}>🚧 Expanding Soon</div>
          </article>
        </div>
      </div>
    </section>
  );
}
