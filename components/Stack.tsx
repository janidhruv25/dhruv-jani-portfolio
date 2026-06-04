"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Stack.module.css";

const techCategories = [
  {
    title: "EMBEDDED SYSTEMS",
    items: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "FreeRTOS", "UART", "SPI", "I2C", "PWM", "CAN Bus"]
  },
  {
    title: "PROGRAMMING & SOFTWARE",
    items: ["C", "C++", "Embedded C", "Python", "Data Structures & Algorithms"]
  },
  {
    title: "PCB & HARDWARE DESIGN",
    items: ["Altium Designer", "KiCad", "PCB Layout", "Schematic Design", "Circuit Design", "RF PCB Design", "Hardware Debugging", "Signal Integrity"]
  },
  {
    title: "WEB & BACKEND",
    items: ["HTML", "CSS", "Flask", "Firebase"]
  },
  {
    title: "TOOLS & DEVELOPMENT",
    items: ["Git", "GitHub", "Docker", "Linux", "Ubuntu", "VS Code"]
  },
  {
    title: "ROBOTICS & IOT",
    items: ["Motor Control", "Sensor Interfacing", "Edge AI", "Jetson Orin Nano", "Intel RealSense", "Industrial Communication", "Automation Systems"]
  }
];

export default function Stack() {
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
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as any },
    },
  };

  return (
    <section id="stack" className={styles.stackSection}>
      {/* Background elements */}
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNumber}>04 / STACK</span>
          <h2 className={styles.title}>
            Tools & <span className={styles.titleGradient}>Technologies</span>
          </h2>
          <p className={styles.subtitle}>My technical toolkit across embedded systems, hardware, and software</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={styles.categoryCard}
            >
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.techItems}>
                {category.items.map((item) => (
                  <span key={item} className={styles.techItem}>
                    {item}
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