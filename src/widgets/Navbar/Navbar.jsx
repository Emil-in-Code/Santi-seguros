// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/Logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDetailPage = location.pathname.startsWith('/seguro/');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoIcon}>
              <img src={logo} className={styles.logoSvg} alt="logo"  />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <NavHashLink smooth to="/#services" className={styles.navLink}>Servicios</NavHashLink>
            <NavHashLink smooth to="/#Info" className={styles.navLink}>Sobre Mí</NavHashLink>
            <NavHashLink smooth to="#Footer" className={styles.navLink}>Contactos</NavHashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <NavHashLink smooth to="/#services" className={styles.mobileLink} onClick={closeMenu}>Servicios</NavHashLink>
            <NavHashLink smooth to="/#Info" className={styles.mobileLink} onClick={closeMenu}>Sobre mí</NavHashLink>
            <NavHashLink smooth to="/#Footer" className={styles.mobileLink} onClick={closeMenu}>Contacto</NavHashLink>
          </div>
        )}
      </nav>
    </header>
  );
}
