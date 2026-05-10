import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={`${styles.servicesHeader} reveal`}>
          <div className="section-label">Our Services</div>
          <h2 className="section-title">Everything Your Vehicle Needs,<br /><span>Under One Roof</span></h2>
        </div>

        <div className={`${styles.bentoServices} reveal`}>
          {/* Featured: Periodic Servicing */}
          <article className={`${styles.bentoCell} ${styles.bsFeatured}`}>
            <div className={styles.bcIcon}>🔧</div>
            <div>
              <div className={styles.bcTag}>Most Popular</div>
              <h3 className={styles.bcTitle}>Periodic Servicing</h3>
              <p className={styles.bcDesc}>Complete scheduled maintenance — oil change, filters, fluid top-ups, and a thorough vehicle health check. Keep your TATA running like new.</p>
            </div>
            <div className={styles.bcStat} aria-hidden="true">01</div>
          </article>

          {/* Engine Repair */}
          <article className={`${styles.bentoCell} ${styles.bsEngine} reveal`} style={{ transitionDelay: '0.07s' }}>
            <div className={styles.bcIcon}>⚙️</div>
            <h3 className={styles.bcTitle}>Engine Repair</h3>
            <p className={styles.bcDesc}>Expert diagnostics by certified technicians. Minor tune-ups to full overhauls.</p>
          </article>

          {/* Denting & Painting */}
          <article className={`${styles.bentoCell} ${styles.bsDenting} reveal`} style={{ transitionDelay: '0.14s' }}>
            <div className={styles.bcIcon}>🎨</div>
            <h3 className={styles.bcTitle}>Denting &amp; Painting</h3>
            <p className={styles.bcDesc}>OEM-matched bodywork. Restore your showroom finish.</p>
          </article>

          {/* Wheel Alignment */}
          <article className={`${styles.bentoCell} ${styles.bsWheel} reveal`} style={{ transitionDelay: '0.21s' }}>
            <div className={styles.bcIcon}>⚖️</div>
            <h3 className={styles.bcTitle}>Wheel Alignment</h3>
            <p className={styles.bcDesc}>Computerized precision. Better handling, longer tyre life.</p>
          </article>

          {/* Ceramic Coating */}
          <article className={`${styles.bentoCell} ${styles.bsCeramic} reveal`} style={{ transitionDelay: '0.28s' }}>
            <div className={styles.bcIcon}>🛡️</div>
            <h3 className={styles.bcTitle}>Ceramic / Teflon Coating</h3>
            <p className={styles.bcDesc}>Premium paint protection against UV, dust, and scratches. Long-lasting showroom shine for your vehicle.</p>
          </article>

          {/* Cashless Insurance */}
          <article className={`${styles.bentoCell} ${styles.bsInsurance} reveal`} style={{ transitionDelay: '0.35s' }}>
            <div className={styles.bcIcon} style={{ background: 'rgba(255,107,0,0.1)' }}>📋</div>
            <h3 className={styles.bcTitle} style={{ color: 'var(--orange)' }}>Cashless Insurance Claims</h3>
            <p className={styles.bcDesc} style={{ color: '#7A3800' }}>Direct insurance tie-ups. We handle all paperwork — you just drive away.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
