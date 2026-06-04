"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        console.error("Error:", data.error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.bgTint}></div>
      <div className={styles.bgTint2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>09 / CONTACT</span>
          <h2 className={styles.title}>
            Let's Build <span className={styles.titleGradient}>Something Real</span>
          </h2>
          <p className={styles.subtitle}>Open for opportunities and collaborations</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.gridContainer}
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className={styles.contactInfo}>
            <p className={styles.contactText}>
              Open to embedded engineering roles, research collaborations, and selective freelance projects. 
              Serious inquiries only. I respond within 24 hours.
            </p>

            <div className={styles.availabilityBadge}>
              <span className={styles.availabilityDot}></span>
              <span className={styles.availabilityText}>AVAILABLE FOR WORK</span>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactInfoContent}>
                  <div className={styles.contactLabel}>GITHUB</div>
                  <a href="https://github.com/janidhruv25" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                    janidhruv25
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactInfoContent}>
                  <div className={styles.contactLabel}>LINKEDIN</div>
                  <a href="https://www.linkedin.com/in/janidhruv25/" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                    janidhruv25
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactInfoContent}>
                  <div className={styles.contactLabel}>EMAIL</div>
                  <a href="mailto:janidhruv2504@gmail.com" className={styles.contactValue}>
                    janidhruv2504@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactInfoContent}>
                  <div className={styles.contactLabel}>LOCATION</div>
                  <span className={styles.contactValue}>Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="What are we building?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  placeholder="Tell me about your project, role, or idea..."
                  required
                  disabled={isSubmitting}
                  rows={5}
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
              </button>

              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className={styles.errorMessage}>
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>

        <div className={styles.endDivider}>
          <div className={styles.endLine}></div>
        </div>
      </div>
    </section>
  );
}