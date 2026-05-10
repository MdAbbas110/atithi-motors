'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactInner}>
          {/* LEFT: Info */}
          <div className={`${styles.contactLeft} reveal`}>
            <div className="section-label">Contact &amp; Book</div>
            <h2 className={styles.contactTitle}>Let&apos;s Get Your<br />Vehicle Back on Road</h2>
            <p className={styles.contactDesc}>
              Book a service appointment or call us directly. Our team is ready to assist — from routine maintenance to emergency repairs.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <div className={styles.contactDetailIcon} aria-hidden="true">📞</div>
                <div>
                  <strong>7518951555</strong>
                  <div className={styles.contactDetailSub}>Call or WhatsApp — Available Daily</div>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactDetailIcon} aria-hidden="true">📍</div>
                <div>
                  <strong>In front of Jio Petrol Pump, NH-29</strong>
                  <div className={styles.contactDetailSub}>Fatehullahpur, Ghazipur — 233302</div>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactDetailIcon} aria-hidden="true">🕘</div>
                <div>
                  <strong>Opens 9:00 AM Daily</strong>
                  <div className={styles.contactDetailSub}>All days including weekends</div>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.contactDetailIcon} aria-hidden="true">🛡️</div>
                <div>
                  <strong>TATA Authorized Since 2018</strong>
                  <div className={styles.contactDetailSub}>Officially certified · Genuine parts guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking form */}
          <div className={`${styles.bookingForm} reveal`} style={{ transitionDelay: '0.15s' }}>
            <h3 className={styles.bookingTitle}>Book a Service</h3>
            <p className={styles.bookingSub}>Fill in below and we&apos;ll call you back to confirm your appointment.</p>

            {submitted ? (
              <div className={styles.bookingSuccess} role="alert">
                <div className={styles.bookingSuccessIcon} aria-hidden="true">🎉</div>
                <div className={styles.bookingSuccessTitle}>Booking Request Sent!</div>
                <p className={styles.bookingSuccessText}>We&apos;ll call you back shortly to confirm your appointment. Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="bookingName">Full Name *</label>
                  <input id="bookingName" className={styles.formInput} type="text" placeholder="Your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="bookingPhone">Phone Number *</label>
                  <input id="bookingPhone" className={styles.formInput} type="tel" placeholder="Your mobile number" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="bookingVehicle">Vehicle Model *</label>
                  <input id="bookingVehicle" className={styles.formInput} type="text" placeholder="e.g. Tata Nexon, Tata Ace" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="bookingService">Service Required *</label>
                  <select id="bookingService" className={styles.formInput} required style={{ cursor: 'pointer' }}>
                    <option value="">Select a service...</option>
                    <option>Periodic Servicing</option>
                    <option>Engine Repair</option>
                    <option>Denting &amp; Painting</option>
                    <option>Wheel Alignment &amp; Balancing</option>
                    <option>Ceramic / Teflon Coating</option>
                    <option>Cashless Insurance Claim</option>
                    <option>DEF / Urea Purchase</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px', padding: '15px', fontSize: '16px' }}>
                  Book Appointment →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
