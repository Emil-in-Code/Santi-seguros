// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/Página 20.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith('/seguro/');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  if (isDetailPage) return null;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <img src={logo} className={styles.logoSvg} />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="#services" className={styles.navLink}>Servicios</a>
            <a href="#Info" className={styles.navLink}>Sobre Mí</a>
            <a href="#Footer" className={styles.navLink}>Contactos</a>
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
            <a href="#services" className={styles.mobileLink} onClick={closeMenu}>Servicios</a>
            <a href="#Info" className={styles.mobileLink} onClick={closeMenu}>Sobre mí</a>
            <a href="#Footer" className={styles.mobileLink} onClick={closeMenu}>Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
}
