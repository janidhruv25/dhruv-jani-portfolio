"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./competitions.module.css";

const competitions = [
  {
    id: "01",
    name: "DD Robocon 2025",
    role: "Senior Firmware Lead",
    grant: "Grant ₹6,05,000",
    grantSource: "Charutar Vidya Mandal University",
    period: "Nov 2024 – Jul 2025",
    description: "Led firmware development for semi-autonomous basketball robots with 3 DOF omni-drive locomotion and automated shooting. Implemented PID-based trajectory stabilization and synchronized multi-robot communication systems for coordinated team play.",
    tags: ["Firmware", "PID Control", "Omni-drive", "Robot Communication", "C++", "Embedded Systems"]
  },
  {
    id: "02",
    name: "Robofest 4.0 – Underwater ROV",
    role: "Firmware & Electronics Lead",
    grant: "Grant ₹2,50,000",
    grantSource: "GUJCOST",
    period: "Apr 2024 – Jan 2025",
    description: "Engineered Kraken ROV firmware using ESP32-S3 and Raspberry Pi enabling 6-DOF underwater control. Developed UART communication protocols, waterproof power circuits, and optimized thruster control systems for precise underwater navigation.",
    tags: ["ESP32-S3", "Raspberry Pi", "UART", "Underwater ROV", "6-DOF", "Thruster Control", "PCB Design"]
  },
  {
    id: "03",
    name: "DD Robocon 2024",
    role: "Junior Firmware Engineer",
    grant: "Grant ₹3,97,000",
    grantSource: "Charutar Vidya Mandal University",
    period: "Nov 2023 – Jul 2024",
    description: "Developed firmware for autonomous and manual Mecanum drive robots with encoder feedback systems. Achieved 90%+ task completion efficiency during national-level testing and trials through optimized control algorithms.",
    tags: ["Mecanum Drive", "Encoder Feedback", "Autonomous Robots", "Firmware", "C++", "PID Control"]
  }
];

export default function Competitions() {
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
      transition: { duration: 0.4, ease: "easeOut" as any },
    },
  };

  return (
    <section id="competitions" className={styles.competitionsSection}>
      {/* Background elements */}
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNumber}>03 / COMPETITIONS & GRANTS</span>
          <h2 className={styles.title}>
            Competitions 
          </h2>
          <p className={styles.subtitle}>3 competitions • ₹12.52L+ grants won</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {competitions.map((comp) => (
            <motion.div
              key={comp.id}
              variants={itemVariants}
              className={styles.competitionCard}
            >
              {/* Card Number */}
              <div className={styles.cardNumber}>{comp.id}</div>
              
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <h3 className={styles.competitionName}>{comp.name}</h3>
                <p className={styles.role}>{comp.role}</p>
                <div className={styles.grantWrapper}>
                  <span className={styles.grantAmount}>{comp.grant}</span>
                  <span className={styles.grantSource}>{comp.grantSource}</span>
                </div>
                <p className={styles.period}>{comp.period}</p>
              </div>

              {/* Description - Justified text */}
              <div className={styles.description}>
                <p className={styles.descriptionText}>{comp.description}</p>
              </div>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {comp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
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