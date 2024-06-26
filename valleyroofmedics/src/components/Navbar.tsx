"use client";

import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <section className={styles.menu}>
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="https://valleyroofmedics.com" title="Valley Roof Medics">
            <Image
              src="https://r.mobirisesite.com/372852/assets/images/photo-1533517954228-3e95c10a5-h_lvwi1ace.jpg"
              alt="Logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          </a>
          <a className={styles.caption} href="https://valleyroofmedics.com">VALLEY ROOF MEDICS</a>
        </div>
        <button className={styles.toggler} title="Valley Roof Medics" type="button">
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={styles.collapse}>
          <ul className={styles.nav}>
            <li className={styles.item}>
              <a className={styles.link} href="#">Roofing Services</a>
              <div className={styles.dropdown}>
                <a className={styles.dropdownItem} href="#">Home Roof Repair</a>
                <a className={styles.dropdownItem} href="#">Commercial Roof Repair</a>
              </div>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">More Roofing</a>
              <div className={styles.dropdown}>
                <a className={styles.dropdownItem} href="#">DIY Roof Repair Blog</a>
                <a className={styles.dropdownItem} href="#">About Roof Medics</a>
              </div>
            </li>
          </ul>
          <div className={styles.icons}>
            <a href="https://valleyroofmedics.com" title="Valley Roof Medics" className={styles.icon}>
              <span className="mbr-iconfont mobi-mbri-phone"></span>
            </a>
            <a href="https://valleyroofmedics.com" title="Valley Roof Medics" className={styles.icon}>
              <span className="mbr-iconfont socicon-facebook"></span>
            </a>
            <a href="https://valleyroofmedics.com" title="Valley Roof Medics" className={styles.icon}>
              <span className="mbr-iconfont socicon-instagram"></span>
            </a>
          </div>
          <div className={styles.buttons}>
            <a className="btn btn-primary" href="https://valleyroofmedics.com">Schedule Estimate</a>
          </div>
        </div>
      </div>
    </nav>
  </section>
);

export default Navbar;
