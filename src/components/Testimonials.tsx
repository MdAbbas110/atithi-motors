'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    stars: 5,
    text: '"Outstanding service! Brought my Tata Harrier for periodic servicing and the team was incredibly professional. Work was done on time with genuine parts. Highly recommend Atithi Motors to everyone in Ghazipur."',
    initials: 'RK',
    name: 'Rakesh Kumar Singh',
    vehicle: 'Tata Harrier · Ghazipur',
  },
  {
    stars: 5,
    text: '"I run a fleet of Tata Ace trucks and have been buying DEF from Atithi Motors for over 2 years. Genuine quality, good pricing, and bulk supply is never an issue. My SCR systems are all in perfect condition."',
    initials: 'SM',
    name: 'Suresh Mishra',
    vehicle: 'Fleet Operator · Tata Ace',
  },
  {
    stars: 5,
    text: '"Got my Tata Nexon repaired after a minor accident — cashless insurance claim was handled completely by them. Zero stress, great bodywork. The car looks brand new. The team is very honest and reliable."',
    initials: 'PP',
    name: 'Priya Pandey',
    vehicle: 'Tata Nexon · Ghazipur',
  },
];

export default function Testimonials() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRating) { alert('Please select a star rating.'); return; }
    setSubmitted(true);
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={`${styles.testimonialsHeader} reveal`}>
          <div className="section-label">Customer Reviews</div>
          <h2 className="section-title">What Our <span>Customers Say</span></h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <article key={i} className={`${styles.testimonialCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.testimonialStars} aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className={styles.star} aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className={styles.testimonialText}>{t.text}</blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar} aria-hidden="true">{t.initials}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorVehicle}>{t.vehicle}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* REVIEW FORM */}
        <div className={`${styles.reviewFormWrap} reveal`}>
          <h3 className={styles.reviewFormTitle}>Had a great experience? Tell the world! 🙌</h3>
          <p className={styles.reviewFormSub}>Your feedback helps other customers make the right choice — and motivates our team!</p>

          {submitted ? (
            <div className={styles.formSuccess} role="alert">
              ✅ Thank you for your review! We appreciate your feedback.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="reviewName">Your Name *</label>
                  <input id="reviewName" className={styles.formInput} type="text" placeholder="e.g. Amit Sharma" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="reviewVehicle">Your Vehicle *</label>
                  <input id="reviewVehicle" className={styles.formInput} type="text" placeholder="e.g. Tata Harrier, Tata Ace" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.formLabel}>Your Rating *</label>
                  <div className={styles.starSelector} role="group" aria-label="Rating">
                    {[1, 2, 3, 4, 5].map(val => (
                      <button
                        key={val}
                        type="button"
                        className={`${styles.starBtn} ${(hoverRating || selectedRating) >= val ? styles.active : ''}`}
                        aria-label={`${val} star${val > 1 ? 's' : ''}`}
                        onClick={() => setSelectedRating(val)}
                        onMouseEnter={() => setHoverRating(val)}
                        onMouseLeave={() => setHoverRating(0)}
                      >★</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.formLabel} htmlFor="reviewText">Your Review *</label>
                  <textarea id="reviewText" className={styles.formTextarea} placeholder="Tell us about your experience at Atithi Motors..." required />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Submit Review</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
