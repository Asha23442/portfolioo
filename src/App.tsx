import React, { useState } from 'react';
import { PortfolioThemeProvider } from './context/PortfolioThemeContext';
import { Navbar } from './components/portfolio/Navbar';
import { Hero } from './components/portfolio/Hero';
import { AboutSection } from './components/portfolio/AboutSection';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { ExperienceSection } from './components/portfolio/ExperienceSection';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { EducationCertifications } from './components/portfolio/EducationCertifications';
import { ContactSection } from './components/portfolio/ContactSection';
import { Footer } from './components/portfolio/Footer';
import { ResumeModal } from './components/portfolio/ResumeModal';
import { ThemePickerModal } from './components/portfolio/ThemePickerModal';
import { FloatingQuickBar } from './components/portfolio/FloatingQuickBar';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <PortfolioThemeProvider>
      <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {/* 1. Global Navigation with Theme Switcher & Socials */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. Main Portfolio Content with Motion Animations */}
        <main className="flex-1">
          {/* Hero Banner with Rotating Role and Code Terminal */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* About & Core Engineering Pillars */}
          <AboutSection />

          {/* Featured Projects with Live Search & Filter */}
          <ProjectsSection />

          {/* Career Experience Timeline with Pulsing Nodes */}
          <ExperienceSection />

          {/* Skills Matrix with Animated Categories */}
          <SkillsSection />

          {/* Education, Research & Verified Certifications */}
          <EducationCertifications />

          {/* Contact & Direct Communication */}
          <ContactSection />
        </main>

        {/* 3. Global Footer */}
        <Footer />

        {/* 4. Full Resume Viewer & ATS Print Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* 5. Interactive Theme Picker Modal */}
        <ThemePickerModal />

        {/* 6. Floating Quick Actions Bar */}
        <FloatingQuickBar onOpenResume={() => setResumeModalOpen(true)} />
      </div>
    </PortfolioThemeProvider>
  );
}
