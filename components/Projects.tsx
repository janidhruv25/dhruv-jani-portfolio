"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    name: "Real-Time Medical Waste & General Waste Classification",
    techStack: "YOLOv7 | NVIDIA Jetson Orin Nano | Intel RealSense",
    hasPaper: true,
    hasRepo: true,
    repoLink: "https://github.com/janidhruv2507/smart_waste_sorting",
    description: `Developed a real-time medical and general waste classification system using YOLOv7 object detection on NVIDIA Jetson Orin Nano for low-latency edge AI deployment. The system integrates an Intel RealSense depth camera, live monitoring dashboard, and automated waste segregation to reduce manual handling and infection risks in healthcare environments. Experimental testing demonstrated high classification accuracy and efficiency, validating its application for automating hospital waste management processes. A research paper based on this work has been published.`,
    tags: ["YOLOv7", "Jetson Orin Nano", "Intel RealSense", "Python", "Deep Learning", "Computer Vision", "Edge AI", "Real-time Detection"]
  },
  {
    id: "02",
    name: "Multi-Port RF Switch for Antenna Characterization",
    techStack: "RF Design | STM32 | KiCad | GaAs MMIC | 40 GHz",
    hasPaper: true,
    hasRepo: false,
    repoLink: "",
    description: "Designed and simulated a high-frequency (~40 GHz) multiport RF switch for automated antenna testing at ISRO SAC. Conducted testing and debugging of an existing 3.5 GHz RF switch system, analyzed key RF performance parameters, and developed a scalable switching architecture for multibeam antenna characterization. Designed supporting PCB layouts using KiCad, with emphasis on RF design considerations and signal integrity. Developed configurable STM32 firmware using bare-metal programming techniques for hardware control and system automation. Presented award-winning research at NCATEX on automated multibeam characterization in CATR.",
    tags: ["RF Design", "STM32", "KiCad", "GaAs MMIC", "40 GHz", "SP16T", "Antenna Testing", "Embedded C"]
  },
  {
    id: "03",
    name: "STM32F407 Inverter VCU - Electric Vehicle Control Unit",
    techStack: "STM32F407 | PCB Design | Power Electronics | CAN Bus",
    hasPaper: false,
    hasRepo: true,
    repoLink: "https://github.com/janidhruv25/STM-PROJECTS",
    description: `Developed a custom STM32F407-based Vehicle Control Unit (VCU) for electric vehicle motor control and inverter interfacing, acting as the central controller of the EV powertrain. The system manages torque commands, regenerative braking, battery management system communication, and closed-loop feedback using current and voltage sensors for efficient motor operation. A complete PCB was designed incorporating power management, signal isolation, EMI mitigation, split-ground architecture, and high-voltage safety considerations. The project demonstrates the integration of embedded systems, power electronics, and automotive-grade PCB design practices.`,
    tags: ["STM32F407", "PCB Design", "Power Electronics", "CAN Bus", "PWM", "Gate Drivers", "EMI/EMC", "Automotive"]
  }
];

export default function Projects() {
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
    <section id="projects" className={styles.projectsSection}>
      {/* Background elements */}
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNumber}>03 / PROJECTS</span>
          <h2 className={styles.title}>
            Featured <span className={styles.titleGradient}>Work</span>
          </h2>
          <p className={styles.subtitle}>Research-backed innovations in AI, RF systems & EV technology</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={styles.projectCard}
            >
              {/* Card Number */}
              <div className={styles.cardNumber}>{project.id}</div>
              
              {/* Card Header with Research Paper Badge */}
              <div className={styles.cardHeader}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  {project.hasPaper && (
                    <span className={styles.paperBadge}>📄 RESEARCH PAPER</span>
                  )}
                </div>
                <p className={styles.techStack}>{project.techStack}</p>
              </div>

              {/* Description */}
              <div className={styles.description}>
                <p className={styles.descriptionText}>{project.description}</p>
              </div>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Repository Button - Only show if hasRepo is true */}
              {project.hasRepo && (
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.repoButton}
                >
                  VIEW REPOSITORY →
                </a>
              )}
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