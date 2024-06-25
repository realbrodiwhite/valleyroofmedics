import styles from '../styles/Features.module.css';

const Features = () => (
  <section className={styles.features}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Peak Protection Partners</h3>
      <p className="text-center mb-4">Experience top-notch roofing services with Roof Medics, your ultimate peak protection partners. We ensure your shelter is shielded and your home is healed!</p>
      <div className="row">
        <div className="col-lg-6">
          <img src="/images/feature1.jpg" alt="Feature" className="w-full mb-4" />
        </div>
        <div className="col-lg-6">
          <img src="/images/feature2.jpg" alt="Feature" className="w-full mb-4" />
        </div>
      </div>
    </div>
  </section>
);

export default Features;
