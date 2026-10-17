import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KpiBanner from './components/KpiBanner';
import Profile30Seconds from './components/Profile30Seconds';
import AboutSection from './components/AboutSection';
import StrengthsGrid from './components/StrengthsGrid';
import ExperienceSection from './components/ExperienceSection';
import MonitoringSection from './components/MonitoringSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060B19] text-[#94A3B8] font-sans selection:bg-[#10B981] selection:text-[#060B19] antialiased">
      {/* 1. Header Sticky (72px) */}
      <Header />

      <main>
        {/* 2. Hero Section (2 columnas: 58% Izq / 42% Der) */}
        <Hero />

        {/* 3. Franja de 4 KPIs */}
        <KpiBanner />

        {/* 4. Mi Perfil en 30 Segundos */}
        <Profile30Seconds />

        {/* 5. Quién Soy Profesionalmente */}
        <AboutSection />

        {/* 6. Diferenciación & Fortalezas (Grid 2x2) */}
        <StrengthsGrid />

        {/* 7. Experiencia Profesional */}
        <ExperienceSection />

        {/* 8. Monitoreo & IGA / Capacidad Operativa */}
        <MonitoringSection />

        {/* 9. Competencias, Software & Formación */}
        <SkillsSection />

        {/* 10. Acreditaciones, Diplomados y Cursos */}
        <CertificationsSection />

        {/* 11. Contacto Técnico & Disponibilidad */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
