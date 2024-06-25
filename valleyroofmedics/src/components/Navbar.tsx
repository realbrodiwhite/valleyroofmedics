import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="navbar-brand">
        <a href="https://mobirise.com" className="text-2xl font-bold">VALLEY ROOF MEDICS</a>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#about" className="text-lg">About</a></li>
        <li><a href="#services" className="text-lg">Services</a></li>
        <li><a href="#projects" className="text-lg">Projects</a></li>
        <li><a href="#contact" className="text-lg">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
