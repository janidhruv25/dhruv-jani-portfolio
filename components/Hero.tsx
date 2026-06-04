"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("experience");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.heroContainer}>
      {/* Background Circles */}
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>
      <div className={styles.bgCircle3}></div>
      <div className={styles.smallCircle1}></div>
      <div className={styles.smallCircle2}></div>
      <div className={styles.smallCircle3}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.imageSection}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.blueGlow}></div>
                <div className={styles.imageContainer}>
                  <img 
                    src="/Dhruv-Jani.png" 
                    alt="Dhruv Jani" 
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.decorationCircle1}></div>
                <div className={styles.decorationCircle2}></div>
                <div className={styles.nameBadge}>
                  <span>DHRUV JANI</span>
                </div>
              </div>
            </motion.div>
            
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.contentSection}
            >
              <div className={styles.contentInner}>
                {/* Available Badge */}
                <div className={styles.availableBadge}>
                  <span className={styles.badgeDot}></span>
                  <span className={styles.badgeText}>
                    AVAILABLE - EMBEDDED SYSTEMS ENGINEER
                  </span>
                </div>
                
                {/* Name */}
                <h1 className={styles.nameTitle}>
                  DHRUV<br />
                  <span className={styles.nameBlue}>JANI</span>
                </h1>
                
                {/* Role Tags */}
                <p className={styles.roleTags}>
                  EMBEDDED ENGINEER · PCB DESIGNER · FIRMWARE DEVELOPER · HARDWARE DESIGNER
                </p>
                
                {/* Description */}
                <div className={styles.descriptionWrapper}>
                  <p className={styles.descriptionText}>
                    Embedded Systems Engineer specializing in PCB design, firmware development, 
                    and hardware-software co-design. Expert in KiCad for custom PCB development, 
                    STM32 microcontrollers, and real-time embedded systems. Building intelligent 
                    hardware solutions from concept to production.
                  </p>
                </div>
                
                {/* Space after description */}
                <div className={styles.spaceAfterDesc}></div>
                
                {/* Buttons */}
                <div className={styles.buttonsContainer}>
                  <a href="#projects" className={styles.button}>
                    VIEW WORK
                    <span className={styles.buttonArrow}>→</span>
                  </a>
                  <a href="#contact" className={styles.button}>
                    GET IN TOUCH
                  </a>
                  <a href="/resume.pdf" download="Dhruv_Jani_Resume.pdf" className={styles.button}>
                        RESUME
                        <span className={styles.buttonDownArrow}>↓</span>
                  </a>
                </div>
                
                {/* Space after buttons */}
                <div className={styles.spaceAfterButtons}></div>
                
                {/* Stats */}
                <div className={styles.statsContainer}>
                  <div className={styles.statItem}>
                    <p className={`${styles.statValue} ${styles.statValueBlue}`}>ISRO</p>
                    <p className={styles.statLabel}>PREVIOUSLY AT</p>
                  </div>
                  <div className={styles.statItem}>
                    <p className={`${styles.statValue} ${styles.statValueDark}`}>9.3</p>
                    <p className={styles.statLabel}>CGPA</p>
                  </div>
                  <div className={styles.statItem}>
                    <p className={`${styles.statValue} ${styles.statValueDark}`}>2+</p>
                    <p className={styles.statLabel}>INTERNSHIPS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Section - At the very bottom of Hero */}
      <div className={styles.scrollSection}>
        <div className={styles.scrollContainer}>
          {/* SCROLL content - Arrow and text */}
          <div className={styles.scrollContent} onClick={scrollToNext}>
            {/* Animated Arrow */}
            <div className={styles.scrollArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* SCROLL text */}
            <span className={styles.scrollText}>SCROLL</span>
          </div>
          
          {/* Full width horizontal line at bottom */}
          <div className={styles.horizontalLine}></div>
        </div>
      </div>
    </section>
  );
}