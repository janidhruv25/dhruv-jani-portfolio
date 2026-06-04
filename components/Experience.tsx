"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    company: "ISRO: Space Applications Centre (SAC)",
    role: "Embedded Engineer Intern – ATMG–ASA Department",
    period: "Jan 2026 – Apr 2026",
    location: "Ahmedabad, Gujarat",
    current: false,
    bullets: [
      "Designed and developed a 16×1 RF switch matrix operating up to 40 GHz for automated multibeam antenna measurements.",
      "Implemented STM32-based embedded control for cascaded SP4T GaAs MMIC RF switches using SP16T architecture.",
      "Developed optimized Embedded C firmware using register-level GPIO control and break-before-make switching logic.",
      "Performed hardware interfacing, debugging, validation, and RF switching analysis using oscilloscopes and antenna measurement setups."
    ],
    description: "Modern antenna systems require extensive characterization of multiple feed ports during testing. This work focuses on high-frequency multiport RF switch for antenna testing applications.",
    tags: ["STM32", "Embedded C", "RF Design", "PCB Design", "KiCad", "SP16T", "Oscilloscope", "40 GHz"]
  },
  {
    id: 2,
    company: "Edu Tantr Ventures Pvt Ltd",
    role: "Embedded Software Engineer Intern",
    period: "Aug 2025 – Dec 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Developed an embedded simulation of an automatic washing machine controller using Embedded C/C++.",
      "Integrated real-time control logic, water-level detection, ISR handling, and motor actuation.",
      "Optimized interrupt scheduling and timing functions for accurate state sequencing and stability."
    ],
    description: "",
    tags: ["Embedded C", "C++", "Real-time Systems", "ISR", "Motor Control", "State Machines"]
  }
];

export default function Experience() {
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>02 / EXPERIENCE</span>
          <h2 className={styles.title}>
            Where I've <span className={styles.titleGradient}>Worked</span>
          </h2>
          <p className={styles.subtitle}>2 internships</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.timelineContainer}
        >
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              <motion.div
                variants={itemVariants}
                className={styles.timelineItem}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.companyInfo}>
                      <h3 className={styles.companyName}>{exp.company}</h3>
                      <p className={styles.role}>{exp.role}</p>
                    </div>
                    <div className={styles.periodLocation}>
                      <p className={styles.period}>{exp.period}</p>
                      <p className={styles.location}>{exp.location}</p>
                    </div>
                  </div>

                  <ul className={styles.bulletList}>
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        <span className={styles.bulletIcon}>▹</span>
                        <span className={styles.bulletText}>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.description && (
                    <div className={styles.description}>
                      <span className={styles.descriptionText}>{exp.description}</span>
                    </div>
                  )}

                  <div className={styles.tagsContainer}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {index < experiences.length - 1 && (
                <div className={styles.sectionDivider}>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.dividerDot}></div>
                  <div className={styles.dividerLine}></div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <div className={styles.endDivider}>
          <div className={styles.endLine}></div>
        </div>
      </div>
    </section>
  );
}