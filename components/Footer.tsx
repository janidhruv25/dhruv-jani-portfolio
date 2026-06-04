"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Name Section */}
        <div className={styles.nameSection}>
          <h2 className={styles.firstName}>DHRUV</h2>
          <h2 className={styles.lastName}>JANI</h2>
        </div>

        {/* Full Width Horizontal Line */}
        <div className={styles.fullWidthDivider}></div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            © {currentYear} Dhruv Jani. Built with Next.js.
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/janidhruv25" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/janidhruv25/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LINKEDIN
            </a>
            <a 
              href="mailto:janidhruv2504@gmail.com" 
              className={styles.socialLink}
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}