import styles from '../styles/Testimonials.module.css';

const Testimonials = () => (
  <section className={styles.testimonials}>
    <div className="container mx-auto p-4 text-center">
      <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <p>"Roof Medics exceeded my expectations! Professional, efficient, and friendly service. Highly recommend!"</p>
          <img src="/images/testimonial1.jpg" alt="Testimonial" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">John Smith</h4>
        </div>
        <div className="col-md-4 mb-4">
          <p>"Incredible work by Roof Medics! They truly care about their customers and deliver exceptional results."</p>
          <img src="/images/testimonial2.jpg" alt="Testimonial" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Emily Johnson</h4>
        </div>
        <div className="col-md-4 mb-4">
          <p>"Roof Medics saved the day! Quick response, quality workmanship, and a pleasure to work with."</p>
          <img src="/images/testimonial3.jpg" alt="Testimonial" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Michael Davis</h4>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
