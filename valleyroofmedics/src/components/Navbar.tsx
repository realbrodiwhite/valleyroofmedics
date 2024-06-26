"use client";

import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <section className={styles.menu} id="menu-5-u8FvvZnJ2R">
    <nav className={`navbar navbar-dropdown navbar-fixed-top navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <a href="https://valleyroofmedics.com" title="Valley Roof Medics">
              <Image
                src="https://r.mobirisesite.com/372852/assets/images/photo-1533517954228-3e95c10a5-h_lvwi1ace.jpg"
                alt="Mobirise Website Builder"
                width={100}
                height={100}
                className={styles.logo}
              />
            </a>
          </span>
          <span className="navbar-caption-wrap">
            <a className={`navbar-caption text-danger display-4 ${styles.navbarCaption}`} href="https://mobiri.se">VALLEY ROOF MEDICS</a>
          </span>
        </div>
        <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item dropdown">
              <a className="nav-link link text-white dropdown-toggle display-4" href="#" aria-expanded="false" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside">Roofing Services</a>
              <div className="dropdown-menu" aria-labelledby="dropdown-695">
                <div className="dropdown">
                  <a className="text-white dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" data-toggle="dropdown-submenu">Roofing Repair Services</a>
                  <div className="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-430">
                    <a className="text-white dropdown-item display-4" href="#">Home Roof Repair</a>
                    <a className="text-white dropdown-item display-4" href="#">Commercial Roof Repair</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a className="text-white dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-bs-auto-close="outside" data-toggle="dropdown-submenu" data-bs-toggle="dropdown">Roof Replacement Services</a>
                  <div className="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-845">
                    <a className="text-white dropdown-item display-4" href="#">Home</a>
                    <a className="text-white dropdown-item display-4" href="#">Commercial Roofs</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a className="text-white dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-bs-auto-close="outside" data-toggle="dropdown-submenu" data-bs-toggle="dropdown">Roofing Materials</a>
                  <div className="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-665">
                    <a className="text-white dropdown-item display-4" href="#">Ashphalt Shingle Roofing</a>
                    <a className="text-white dropdown-item display-4" href="#">Ceramic Shingle Roofing</a>
                    <a className="text-white dropdown-item display-4" href="#">Tin Metal Roofing</a>
                    <a className="text-white dropdown-item display-4" href="#">Slate Shingle Roofing</a>
                    <a className="text-white dropdown-item display-4" href="#">Spanish Tile Roofing</a>
                    <a className="text-white dropdown-item display-4" href="#">Wooden Roofing</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a className="text-white dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-bs-auto-close="outside" data-toggle="dropdown-submenu" data-bs-toggle="dropdown">Commercial Roofing</a>
                  <div className="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-914">
                    <a className="text-white dropdown-item show display-4" href="#">Commercial Roof Repair</a>
                    <a className="text-white dropdown-item show display-4" href="#">Commercial Roof Replacement</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link link text-white dropdown-toggle display-4" href="#" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">More Roofing</a>
              <div className="dropdown-menu" aria-labelledby="dropdown-253">
                <a className="text-white dropdown-item display-4" href="https://mobiri.se">DIY Roof Repair Blog</a>
                <a className="text-white dropdown-item display-4" href="https://mobiri.se">Peak Protection Promise</a>
                <a className="text-white dropdown-item display-4" href="https://mobiri.se">About Roof Medics</a>
                <a className="text-white dropdown-item display-4" href="https://mobiri.se">Contact Roof Medics</a>
              </div>
            </li>
          </ul>
          <div className={styles.iconsMenu}>
            <a className={styles.iconfontWrapper} href="https://mobiri.se" title="Valley Roof Medics">
              <span className={`p-2 mbr-iconfont mobi-mbri-phone mobi-mbri ${styles.icon}`}></span>
            </a>
            <a className={styles.iconfontWrapper} href="https://mobiri.se" title="Valley Roof Medics">
              <span className={`p-2 mbr-iconfont socicon-facebook socicon ${styles.icon}`}></span>
            </a>
            <a className={styles.iconfontWrapper} href="https://mobiri.se" title="Valley Roof Medics">
              <span className={`p-2 mbr-iconfont socicon-instagram socicon ${styles.icon}`}></span>
            </a>
            <a className={styles.iconfontWrapper} href="https://valleyroofmedics.com" title="Valley Roof Medics">
              <span className={`p-2 mbr-iconfont socicon-mail socicon ${styles.icon}`}></span>
            </a>
          </div>
          <div className="navbar-buttons mbr-section-btn">
            <a className="btn btn-primary display-4" href="https://mobiri.se">Schedule Estimate</a>
          </div>
        </div>
      </div>
    </nav>
  </section>
);

export default Navbar;
