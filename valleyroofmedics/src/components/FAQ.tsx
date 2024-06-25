import styles from '../styles/FAQ.module.css';

const FAQ = () => (
  <section className={styles.faq}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
      <div className="faq-item">
        <h5 className="text-xl font-semibold">What services do you offer?</h5>
        <p>Roof Medics provide a wide range of roofing services including repairs, installations, and maintenance.</p>
      </div>
      <div className="faq-item">
        <h5 className="text-xl font-semibold">Are you licensed and insured?</h5>
        <p>Yes, Roof Medics is fully licensed and insured to ensure the highest level of protection for our clients.</p>
      </div>
      <div className="faq-item">
        <h5 className="text-xl font-semibold">Do you offer free estimates?</h5>
        <p>Absolutely! Contact us today for a free estimate on your roofing project.</p>
      </div>
      <div className="faq-item">
        <h5 className="text-xl font-semibold">How quickly can you start work?</h5>
        <p>We strive to begin work on your project as soon as possible, typically within a few days of initial contact.</p>
      </div>
      <div className="faq-item">
        <h5 className="text-xl font-semibold">What areas do you serve?</h5>
        <p>Roof Medics proudly serves Monte Vista, Colorado, and surrounding areas with top-notch roofing services.</p>
      </div>
    </div>
  </section>
);

export default FAQ;
