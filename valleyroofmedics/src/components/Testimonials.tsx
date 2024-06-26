"use client";

import styles from '../styles/Testimonials.module.css';

const Testimonials = () => (
  <section className={styles.testimonials} id="testimonials2-2-u8FvvZzBVs">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Client Testimonials</strong></h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="item col-12 col-md-6 col-lg-4">
          <div className={styles.itemWrapper}>
            <div className={styles.itemContent}>
              <p className="mbr-text mbr-fonts-style display-7">&quot;Roof Medics did an excellent job on my roof replacement. The team was professional, efficient, and ensured that everything was completed to the highest standard. Highly recommend!&quot;</p>
            </div>
            <div className={styles.itemFooter}>
              <h5 className="item-title mbr-fonts-style display-7"><strong>John Doe</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style display-7">Customer</h6>
            </div>
          </div>
        </div>
        <div className="item col-12 col-md-6 col-lg-4">
          <div className={styles.itemWrapper}>
            <div className={styles.itemContent}>
              <p className="mbr-text mbr-fonts-style display-7">&quot;I was impressed with the level of service provided by Roof Medics. They were prompt, courteous, and the quality of work was outstanding. Will definitely use them again for future projects.&quot;</p>
            </div>
            <div className={styles.itemFooter}>
              <h5 className="item-title mbr-fonts-style display-7"><strong>Jane Smith</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style display-7">Customer</h6>
            </div>
          </div>
        </div>
        <div className="item col-12 col-md-6 col-lg-4">
          <div className={styles.itemWrapper}>
            <div className={styles.itemContent}>
              <p className="mbr-text mbr-fonts-style display-7">&quot;Great experience with Roof Medics! The team was knowledgeable and provided valuable advice on maintaining my roof. The repair work was done quickly and effectively.&quot;</p>
            </div>
            <div className={styles.itemFooter}>
              <h5 className="item-title mbr-fonts-style display-7"><strong>Sam Wilson</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style display-7">Customer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
