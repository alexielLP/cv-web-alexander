import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ChevronRight, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Header() {
  const [activeSection, setActiveSection] = useState('perfil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Perfil', href: '#perfil' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Monitoreo & IGA', href: '#monitoreo' },
    { label: 'Competencias', href: '#competencias' },
    { label: 'Acreditaciones', href: '#acreditaciones' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['perfil', 'experiencia', 'monitoreo', 'competencias', 'acreditaciones'];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-[1000] w-full h-[72px] transition-all duration-300 border-b border-[#1E293B] ${
        scrolled ? 'bg-[#060B19]/95 shadow-xl backdrop-blur-md' : 'bg-[#060B19]/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Professional Name */}
        <a 
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-accent/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] font-mono font-bold text-sm group-hover:border-[#10B981] transition-colors">
            AH
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-[#10B981] transition-colors">
              {cvData.personal.fullName}
            </span>
            <span className="text-[11px] font-mono text-[#10B981] tracking-wider hidden sm:block">
              {cvData.personal.cqpFormatted} · LICENCIADO QUÍMICO
            </span>
          </div>
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-[#0F172A] border border-[#1E293B]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#0B1222]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-[#10B981] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={cvData.personal.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV - ALEXANDER HERRERA C..docx"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-all duration-200 shadow-md hover:shadow-glow-emerald active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#060B19]" />
            <span>Descargar CV Completo</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#0F172A] border border-[#1E293B] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080E20] border-b border-[#1E293B] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#0F172A] transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#64748B]" />
              </a>
            ))}
            <div className="pt-3 border-t border-[#1E293B] mt-2">
              <a
                href={cvData.personal.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV - ALEXANDER HERRERA C..docx"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-colors shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Descargar CV Completo</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
