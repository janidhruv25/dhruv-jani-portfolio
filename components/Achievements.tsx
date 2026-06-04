"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Achievements.module.css";

const achievements = [
  {
    id: "01",
    title: "Published Research Paper",
    badge: "PEER-REVIEWED JOURNAL",
    description: "Research paper on Real-Time Medical Waste Classification using YOLOv7 published in a peer-reviewed journal. Achieved high classification accuracy for automated hospital waste management.",
    tags: ["YOLOv7", "Deep Learning", "Computer Vision", "Medical Waste Management"]
  },
  {
    id: "02",
    title: "Published Research Paper",
    badge: "AWARD-WINNING RESEARCH",
    description: "Award-winning research on Multi-Port RF Switch for Antenna Characterization presented at NCATEX. Designed high-frequency (~40 GHz) switching architecture for automated multibeam antenna testing at ISRO SAC.",
    tags: ["RF Design", "STM32", "40 GHz", "Antenna Testing", "ISRO SAC"]
  },
  {
    id: "03",
    title: "Robofest 4.0 Finalist",
    badge: "2.5 LAKH INR GRANT • FIRMWARE LEAD",
    description: "Led KRAKEN underwater ROV team as Firmware & Electronics Lead to national finals, securing competitive research and development grant funding from GUJCOST. Engineered ROV firmware for 6-DOF underwater control.",
    tags: ["Underwater ROV", "ESP32", "Raspberry Pi", "6-DOF", "UART"]
  },
  {
    id: "04",
    title: "Odoo Hackathon Finalist",
    badge: "TOP 50 AMONG 1200+ TEAMS",
    description: "Finalist at Odoo Hackathon organized by SVNIT, securing a position in the Top 50 among 1200+ participating teams. Demonstrated innovative problem-solving and technical implementation skills.",
    tags: ["Hackathon", "Odoo", "Full Stack", "Innovation"]
  }
];

export default function Achievements() {
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
    <section id="achievements" className={styles.achievementsSection}>
      {/* Background elements */}
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNumber}>05 / RECOGNITION</span>
          <h2 className={styles.title}>
            Awards & <span className={styles.titleGradient}>Achievements</span>
          </h2>
          <p className={styles.subtitle}>Research publications, grants, and competitive accomplishments</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className={styles.achievementCard}
            >
              {/* Card Number */}
              <div className={styles.cardNumber}>{achievement.id}</div>
              
              {/* Achievement Title */}
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              
              {/* Badge */}
              <div className={styles.achievementBadge}>{achievement.badge}</div>

              {/* Description */}
              <div className={styles.description}>
                <p className={styles.descriptionText}>{achievement.description}</p>
              </div>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {achievement.tags.map((tag) => (
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