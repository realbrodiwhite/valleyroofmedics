"use client";

import styles from '../styles/Footer.module.css';

const Footer = () => (
  <section className={styles.footer} id="footer1-9">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-4">
          <div className={styles.socialList}>
            <div className={styles.socItem}>
              <a href="https://valleyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-facebook socicon"></span>
              </a>
            </div>
            <div className={styles.socItem}>
              <a href="https://valleyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-twitter socicon"></span>
              </a>
            </div>
            <div className={styles.socItem}>
              <a href="https://valleyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-instagram socicon"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <p className="mbr-text mbr-fonts-style mb-0 align-center display-7">
            © 2023 Roof Medics - All Rights Reserved.
          </p>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className={styles.socialList}>
            <div className={styles.socItem}>
              <a href="https://valeyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-googleplus socicon"></span>
              </a>
            </div>
            <div className={styles.socItem}>
            <a href="https://valeyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-linkedin socicon"></span>
              </a>
            </div>
            <div className={styles.socItem}>
            <a href="https://valeyroofmedics.com" title="Valley Roof Medics">
                <span className="mbr-iconfont socicon-youtube socicon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
