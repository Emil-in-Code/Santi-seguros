// Navbar.jsx
import React, { useState, useEffect } from 'react';
//import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
//import logo from '../../Assets/Images/logo.webp'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header}`}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="#servicios" className={styles.navLink}>Servicios</a>
            <a href="#projects" className={styles.navLink}>Proyectos</a>
            <a href="#contacto" className={styles.navLink}>Contacto</a>
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
            <a href="#servicios" className={styles.mobileLink} onClick={closeMenu}>
              Servicios
            </a>
            <a href="#proyectos" className={styles.mobileLink} onClick={closeMenu}>
              Proyectos
            </a>
            <a href="#contacto" className={styles.mobileLink} onClick={closeMenu}>
              Contacto
            </a>

          </div>
        )}
      </nav>
    </header>
  );
}
