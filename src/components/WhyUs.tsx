import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section id="why" className={styles.why}>
      <div className="container">
        <div className={`${styles.whyHeader} reveal`}>
          <div className="section-label">Why Atithi Motors</div>
          <h2 className="section-title">The <span>Trusted Choice</span> Across Ghazipur</h2>
        </div>

        <div className={styles.bentoWhy}>
          {/* TATA Authorized */}
          <article className={`${styles.whyCell} ${styles.bwAuthorized} ${styles.themeBlue} reveal`}>
            <div className={styles.wcNum} aria-hidden="true">01</div>
            <div className={styles.wcIcon}>✅</div>
            <h3 className={styles.wcTitle}>TATA Authorized Center</h3>
            <p className={styles.wcDesc}>Officially certified by Tata Motors. Only authorized technicians touch your vehicle.</p>
          </article>

          {/* 7+ Years */}
          <article className={`${styles.whyCell} ${styles.bwYears} ${styles.themeGlass} reveal`} style={{ transitionDelay: '0.07s', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className={styles.wcBig}>7+</div>
            <h3 className={styles.wcTitle} style={{ fontSize: '14px' }}>Years of Trust</h3>
            <p className={styles.wcDesc} style={{ fontSize: '11px' }}>Est. 2018</p>
          </article>

          {/* Genuine Parts */}
          <article className={`${styles.whyCell} ${styles.bwParts} ${styles.themeDim} reveal`} style={{ transitionDelay: '0.14s' }}>
            <div className={styles.wcNum} aria-hidden="true">03</div>
            <div className={styles.wcIcon}>🔩</div>
            <h3 className={styles.wcTitle}>Genuine Parts &amp; DEF Only</h3>
            <p className={styles.wcDesc}>We never compromise — only original TATA spare parts and certified DEF/Urea in every job.</p>
          </article>

          {/* Branches */}
          <article className={`${styles.whyCell} ${styles.bwBranches} ${styles.themeGlass} reveal`} style={{ transitionDelay: '0.21s' }}>
            <div className={styles.wcIcon}>📍</div>
            <h3 className={styles.wcTitle}>Multiple Branches</h3>
            <p className={styles.wcDesc}>Always close to you across Ghazipur.</p>
          </article>

          {/* Free Pickup */}
          <article className={`${styles.whyCell} ${styles.bwPickup} ${styles.themeOrange} reveal`} style={{ transitionDelay: '0.28s' }}>
            <div className={styles.wcNum} aria-hidden="true" style={{ color: 'rgba(255,255,255,0.15)' }}>05</div>
            <div className={styles.wcIcon}>🚗</div>
            <h3 className={styles.wcTitle}>Free Pickup &amp; Drop</h3>
            <p className={styles.wcDesc}>We come to you — book and we&apos;ll return your vehicle fully serviced.</p>
          </article>

          {/* Cashless Insurance */}
          <article className={`${styles.whyCell} ${styles.bwInsurance} ${styles.themeDim} reveal`} style={{ transitionDelay: '0.35s' }}>
            <div className={styles.wcIcon}>🏦</div>
            <h3 className={styles.wcTitle}>Cashless Claims</h3>
            <p className={styles.wcDesc}>Zero-cash insurance processing with all major insurers.</p>
          </article>
        </div>

        {/* Marquee strip */}
        <div className={`${styles.whyMarqueeWrap} reveal`} style={{ transitionDelay: '0.4s' }} aria-hidden="true">
          <div className={styles.whyMarquee}>
            <span>TATA Authorized</span><span className={styles.dot}>·</span>
            <span>Est. 2018</span><span className={styles.dot}>·</span>
            <span>Ghazipur</span><span className={styles.dot}>·</span>
            <span>5000+ Vehicles Serviced</span><span className={styles.dot}>·</span>
            <span>Genuine Parts Only</span><span className={styles.dot}>·</span>
            <span>Free Pickup &amp; Drop</span><span className={styles.dot}>·</span>
            <span>Cashless Insurance</span><span className={styles.dot}>·</span>
            <span>TATA Authorized</span><span className={styles.dot}>·</span>
            <span>Est. 2018</span><span className={styles.dot}>·</span>
            <span>Ghazipur</span><span className={styles.dot}>·</span>
            <span>5000+ Vehicles Serviced</span><span className={styles.dot}>·</span>
            <span>Genuine Parts Only</span><span className={styles.dot}>·</span>
            <span>Free Pickup &amp; Drop</span><span className={styles.dot}>·</span>
            <span>Cashless Insurance</span><span className={styles.dot}>·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
