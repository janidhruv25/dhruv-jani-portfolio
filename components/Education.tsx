"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Easing } from "framer-motion";
import styles from "./Education.module.css";

const education = [
  {
    id: "01",
    degree: "B.Tech, Computer Science & Engineering (IOT)",
    institution: "G. H. Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    period: "2022 — 2026",
    cgpa: "9.3 / 10",
    type: "main"
  },
  {
    id: "02",
    degree: "Minor — Robotics & Automation",
    institution: "G. H. Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    period: "2023 — 2025",
    cgpa: "8.44 / 10",
    type: "minor"
  }
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

 const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as Easing}
  },
};

  return (
    <section id="education" className={styles.educationSection}>
      {/* Background elements */}
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNumber}>06 / EDUCATION</span>
          <h2 className={styles.title}>
            Academic <span className={styles.titleGradient}>Background</span>
          </h2>
          <p className={styles.subtitle}>Formal education and academic achievements</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={styles.educationCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.degreeRow}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <span className={styles.cgpaBadge}>{edu.cgpa}</span>
                </div>
                <p className={styles.institution}>{edu.institution}</p>
                <div className={styles.detailsRow}>
                  <span className={styles.location}>{edu.location}</span>
                  <span className={styles.period}>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Width Blue Line at the end of section */}
        <div className={styles.endDivider}>
          <div className={styles.endLine}></div>
        </div>
      </div>
    </section>
  );
}