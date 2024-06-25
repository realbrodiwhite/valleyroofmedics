import styles from '../styles/Banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <p className="mbr-text mbr-fonts-style display-7">The site was created with Mobirise Free <a href="https://mobirise.com/" className="mbr-black">Website Builder Software</a></p>
    <div className="mbr-section-btn">
      <a className="btn btn-sm btn-primary display-4" href="https://mobirise.com/">Create Your Website!</a>
      <a className="btn btn-sm btn-secondary display-4" href="https://mobirise.com/p/?u=1245197">Remove This Banner</a>
    </div>
  </div>
);

export default Banner;
