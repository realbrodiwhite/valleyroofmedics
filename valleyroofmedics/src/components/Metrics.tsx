import styles from '../styles/Metrics.module.css';

const Metrics = () => (
  <section className={styles.metrics}>
    <div className="container mx-auto p-4 text-center">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <h2 className="text-4xl font-bold">1000+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="col-lg-4 mb-4">
          <h2 className="text-4xl font-bold">98%</h2>
          <p>Customer Satisfaction</p>
        </div>
        <div className="col-lg-4 mb-4">
          <h2 className="text-4xl font-bold">5+</h2>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  </section>
);

export default Metrics;
