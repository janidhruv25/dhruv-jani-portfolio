"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Competitions from "@/components/competitions";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Competitions />
        <Projects />
        <Stack />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}