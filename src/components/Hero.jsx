import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileText, 
  Clock, 
  Maximize2, 
  Camera, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { cvData } from '../data/cvData';
import PhotoModal from './PhotoModal';

export default function Hero() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
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

  return (
    <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 bg-[#060B19] overflow-hidden">
      {/* Background radial gradient glow for subtle depth */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: 58% (7 cols on lg, 7 on xl) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Eyebrow */}
            <div className="mb-4">
              <span className="inline-block text-[#10B981] text-[11px] font-mono font-semibold uppercase tracking-[1.5px] bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/20">
                {cvData.hero.eyebrow}
              </span>
            </div>

            {/* 2. Main Title H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
              {cvData.hero.title}
            </h1>

            {/* 3. Summary Paragraph */}
            <p className="text-[#94A3B8] text-base sm:text-[16.5px] leading-[1.65] font-normal mb-7 max-w-2xl">
              {cvData.hero.summary}
            </p>

            {/* 4. Contact Information Bar */}
            <div className="py-3 px-4 rounded-xl bg-[#080E20] border border-[#1E293B] mb-8 font-mono text-xs sm:text-[13px] text-[#94A3B8] flex flex-wrap items-center gap-y-2 gap-x-4 shadow-sm">
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>{cvData.personal.location}</span>
              </div>
              <span className="text-[#1E293B] hidden sm:inline">|</span>
              <a 
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center gap-1.5 hover:text-[#10B981] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>{cvData.personal.email}</span>
              </a>
              <span className="text-[#1E293B] hidden sm:inline">|</span>
              <a 
                href={cvData.personal.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#10B981] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>{cvData.personal.phone}</span>
              </a>
            </div>

            {/* 5. Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Button 1: Emerald Green CTA */}
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, 'contacto')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-all duration-200 shadow-md hover:shadow-glow-emerald active:scale-98 group"
              >
                <span>Contactar para Oportunidades</span>
                <ArrowRight className="w-4 h-4 text-[#060B19] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Button 2: Dark Slate with border */}
              <a
                href={cvData.personal.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV - ALEXANDER HERRERA C..docx"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-[#0F172A] text-white border border-[#1E293B] hover:border-[#10B981]/50 hover:bg-[#1E293B] transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#10B981]" />
                <span>Ver y Descargar CV (.docx)</span>
              </a>

              {/* Button 3: Text link */}
              <a
                href="#perfil-30-segundos"
                onClick={(e) => scrollToSection(e, 'perfil-30-segundos')}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#10B981] transition-colors group"
              >
                <Clock className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform" />
                <span className="underline-offset-4 hover:underline">Perfil en 30 segundos</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: 42% (5 cols on lg, 5 on xl) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              
              {/* Card Container with emerald glow & 16px radius */}
              <div className="relative rounded-2xl bg-[#0B1222] border border-[#10B981]/35 shadow-glow-emerald overflow-hidden group transition-all duration-300 hover:border-[#10B981]/60">
                
                {/* Photo frame with dark mode integration */}
                <div className="relative aspect-[4/4.8] sm:aspect-[4/4.7] w-full overflow-hidden bg-[#0B1324]">
                  {/* Subtle emerald ambient aura behind portrait */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#10B981]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Portrait image with object-fit cover, top center and soft mask */}
                  <img
                    src={cvData.personal.photoUrl}
                    alt={cvData.personal.fullName}
                    className="relative z-[1] w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      WebkitMaskImage: 'radial-gradient(ellipse 92% 88% at 50% 36%, black 50%, rgba(0, 0, 0, 0.85) 72%, transparent 98%)',
                      maskImage: 'radial-gradient(ellipse 92% 88% at 50% 36%, black 50%, rgba(0, 0, 0, 0.85) 72%, transparent 98%)',
                    }}
                  />

                  {/* Radial vignette overlay to smoothly blend photo borders into #0B1324 */}
                  <div 
                    className="absolute inset-0 z-[2] pointer-events-none" 
                    style={{ 
                      background: 'radial-gradient(ellipse 86% 82% at 50% 36%, transparent 40%, rgba(11, 19, 36, 0.45) 65%, rgba(11, 19, 36, 0.92) 88%, #0B1324 100%)' 
                    }} 
                  />

                  {/* Linear gradient overlay from #0B1324 solid at base upward so shoulders fade seamlessly into the verification bar */}
                  <div 
                    className="absolute inset-x-0 bottom-0 h-44 z-[3] pointer-events-none" 
                    style={{ 
                      background: 'linear-gradient(to top, #0B1324 0%, #0B1324 22%, rgba(11, 19, 36, 0.92) 48%, rgba(11, 19, 36, 0.35) 75%, transparent 100%)' 
                    }} 
                  />

                  {/* Top-Right Floating Action Buttons */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
                    {/* Expand Photo Button */}
                    <button
                      onClick={() => setIsPhotoModalOpen(true)}
                      className="p-2 rounded-lg bg-[#060B19]/80 hover:bg-[#10B981] text-[#94A3B8] hover:text-[#060B19] border border-[#1E293B] hover:border-[#10B981] transition-all backdrop-blur-sm shadow-md"
                      title="Ampliar fotografía a tamaño completo"
                      aria-label="Ampliar fotografía"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Camera Info Button */}
                    <div className="relative">
                      <button
                        onClick={() => setShowTooltip(!showTooltip)}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="p-2 rounded-lg bg-[#060B19]/80 hover:bg-[#0F172A] text-[#10B981] border border-[#1E293B] transition-all backdrop-blur-sm shadow-md"
                        title="Fotografía Oficial UNSA"
                        aria-label="Información de fotografía"
                      >
                        <Camera className="w-4 h-4" />
                      </button>

                      {showTooltip && (
                        <div className="absolute right-0 top-11 w-48 p-2.5 bg-[#0B1222] border border-[#1E293B] rounded-lg shadow-xl text-[11px] font-mono text-[#94A3B8] z-20 animate-fadeIn pointer-events-none">
                          <p className="text-white font-semibold mb-0.5">Retrato Profesional</p>
                          <p>Verificado para Colegiatura CQP y Licenciatura UNSA</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Overlaid Badges at bottom of photo */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#10B981] text-[#060B19] shadow-md tracking-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#060B19]" />
                      {cvData.hero.badgeLeft}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#0B1222]/85 text-white border border-[#1E293B] backdrop-blur-sm shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                      {cvData.hero.badgeRight}
                    </span>
                  </div>
                </div>

                {/* Bottom Verification Bar */}
                <div className="bg-[#0B1324] px-4 py-3.5 border-t border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span className="text-white text-xs font-semibold tracking-tight">
                      {cvData.hero.footerLeft}
                    </span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#10B981] tracking-wider">
                    {cvData.hero.footerRight}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal 
        isOpen={isPhotoModalOpen} 
        onClose={() => setIsPhotoModalOpen(false)} 
      />
    </section>
  );
}
