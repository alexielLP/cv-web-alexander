import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  CheckCircle2, 
  FileCheck, 
  Calendar, 
  Send, 
  UserCheck, 
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  MapPin,
  Clock
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Profile30Seconds() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cvData.profile30Seconds.clipboardSummary)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error('Error al copiar ficha:', err);
      });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentTab = cvData.profile30Seconds.tabs[activeTab];

  return (
    <section id="perfil-30-segundos" className="py-16 md:py-20 bg-[#060B19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981] font-mono text-xs font-semibold tracking-wider uppercase">
                RESUMEN ESTRATÉGICO EJECUTIVO
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {cvData.profile30Seconds.title}
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
              {cvData.profile30Seconds.subtitle}
            </p>
          </div>

          {/* Copy Summary Button */}
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border self-start md:self-auto shrink-0 shadow-sm ${
              copied
                ? 'bg-[#10B981] text-[#060B19] border-[#10B981] shadow-glow-emerald'
                : 'bg-[#0B1222] text-white border-[#1E293B] hover:border-[#10B981]/50 hover:bg-[#0F172A]'
            }`}
            title="Copiar resumen ejecutivo estructurado para recruiters y jefaturas"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#060B19] stroke-[2.5]" />
                <span>¡Ficha Copiada! ✓</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#10B981]" />
                <span>Copiar Ficha Resumen</span>
              </>
            )}
          </button>
        </div>

        {/* Main Content Layout: Tabs Area (Left) + Quick Sheet (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 3 Tabs & Active Tab Panel (7 cols on lg, 8 on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col space-y-6">
            
            {/* Tab navigation pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#080E20] border border-[#1E293B]">
              {cvData.profile30Seconds.tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0F172A] text-white border border-[#10B981]/40 shadow-sm'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#0B1222]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={isActive ? 'text-[#10B981] font-semibold' : ''}>
                        {tab.tabTitle}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#10B981]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-[#1E293B] shadow-xl relative overflow-hidden transition-all duration-300">
              
              {/* Top Meta info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#1E293B]/70">
                <span className="text-[11px] font-mono text-[#10B981] font-semibold tracking-wider">
                  {currentTab.eyebrow}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#080E20] border border-[#1E293B] text-[#94A3B8]">
                  {currentTab.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                {currentTab.headline}
              </h3>

              {/* Key capabilities list */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-2">
                  Capacidades y Dominio Operativo:
                </div>
                {currentTab.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded bg-[#10B981]/15 text-[#10B981] shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {cap}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technical Deliverables */}
              <div className="pt-5 border-t border-[#1E293B]">
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3">
                  Entregables Técnicos que Domina:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {currentTab.deliverables.map((deliv, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#080E20] text-[#CBD5E1] border border-[#1E293B]"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Quick Sheet Card (Ficha Rápida) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0B1222] to-[#080E20] border border-[#1E293B] shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#10B981]" />
                  <span className="text-white font-bold text-base">Ficha Técnica Rápida</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                  PERFIL ACTIVO
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-[13px]">
                
                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Grado & Título Profesional
                  </span>
                  <span className="text-white font-semibold block mt-0.5">
                    {cvData.profile30Seconds.quickSheet.degree}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Colegiatura Oficial
                  </span>
                  <span className="text-[#10B981] font-mono font-bold block mt-0.5">
                    {cvData.profile30Seconds.quickSheet.cqp}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Formación Técnica
                  </span>
                  <span className="text-white font-medium block mt-0.5">
                    {cvData.profile30Seconds.quickSheet.technicalFormation}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Base Geográfica & Régimen
                  </span>
                  <span className="text-white font-medium block mt-0.5">
                    {cvData.profile30Seconds.quickSheet.location}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Capacitación Certificada
                  </span>
                  <span className="text-[#10B981] font-mono font-bold block mt-0.5">
                    {cvData.profile30Seconds.quickSheet.hoursCertified}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Software Especializado
                  </span>
                  <span className="text-[#CBD5E1] block mt-0.5 font-mono text-[12px]">
                    {cvData.profile30Seconds.quickSheet.software}
                  </span>
                </div>

                <div>
                  <span className="text-[#64748B] font-mono block text-[11px] uppercase tracking-wider">
                    Idiomas & Brevete
                  </span>
                  <span className="text-[#CBD5E1] block mt-0.5 text-xs">
                    {cvData.profile30Seconds.quickSheet.languagesLicense}
                  </span>
                </div>

              </div>

              {/* Full Width Green CTA Button */}
              <div className="mt-7 pt-5 border-t border-[#1E293B]">
                <a
                  href="#contacto"
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-all duration-200 shadow-md hover:shadow-glow-emerald"
                >
                  <Send className="w-4 h-4 text-[#060B19]" />
                  <span>Solicitar Entrevista Técnica</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
