"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#competitions", label: "COMPETITIONS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#stack", label: "STACK" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Offset for navbar height
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : styles.navbarDefault
      }`}
    >
      <div className={styles.container}>
        <div className={styles.navbarInner}>
          
          {/* Logo / DJ Symbol - Left */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, "#home")}
            className={styles.logo}
          >
            <span className={styles.logoText}>DJ</span>
          </a>

          {/* Desktop Navigation - Center */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                  <span className={`${styles.navLinkUnderline} ${isActive ? styles.navLinkUnderlineActive : ''}`}></span>
                </a>
              );
            })}
          </div>

          {/* Hire Me Button - Desktop */}
          <div className={styles.desktopHireBtn}>
            <button
              onClick={scrollToContact}
              className={styles.hireBtn}
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.menuIcon}>
              <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpen1 : ''}`}></span>
              <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpen2 : ''}`}></span>
              <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpen3 : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${styles.mobileMenuOverlay} ${
            mobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
          }`}
        >
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className={styles.mobileHireBtnContainer}>
              <button
                onClick={scrollToContact}
                className={styles.mobileHireBtn}
              >
                HIRE ME
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className={styles.backdropOverlay}
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}