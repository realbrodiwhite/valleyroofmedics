"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        document.getElementById('mobiriseBanner')?.classList.add(styles.containerBannerClosing);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [closing]);

  return (
    <div className={styles.containerBanner} id="mobiriseBanner">
      <div className={`${styles.banner} align-center`}>
        <button
          type="button"
          onClick={() => setClosing(true)}
          className={`btn-close ${styles.btnClose}`}
          aria-label="Close"
        ></button>
        <p className="mbr-text mbr-fonts-style display-7">
          The site was created with Mobirise Free <a href="https://mobirise.com/" className="mbr-black">Website Builder Software</a>
        </p>
        <div className="mbr-section-btn">
          <a className="btn btn-sm btn-primary display-4" href="https://mobirise.com/">Create Your Website!</a>
          <a className="btn btn-sm btn-secondary display-4" href="https://mobirise.com/p/?u=1245197">Remove This Banner</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
