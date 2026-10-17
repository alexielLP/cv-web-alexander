import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle, 
  ChevronRight,
  ShieldAlert,
  Droplets,
  HardHat
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function ExperienceSection() {
  const getExperienceIcon = (badge) => {
    if (badge.includes('Hídrica') || badge.includes('Cuencas')) {
      return <Droplets className="w-4 h-4 text-[#10B981]" />;
    }
    if (badge.includes('Minería') || badge.includes('Instrumentación')) {
      return <HardHat className="w-4 h-4 text-[#10B981]" />;
    }
    return <Briefcase className="w-4 h-4 text-[#10B981]" />;
  };

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-[#080E20] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
                TRAYECTORIA PROFESIONAL COMPROBADA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Experiencia Profesional
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
              Historial de desempeño en gran minería (Las Bambas MMG), laboratorios acreditados (CERPER) y entidades rectoras de cuencas (AUTODEMA).
            </p>
          </div>
          <div className="text-xs font-mono text-[#64748B] bg-[#0B1222] px-4 py-2 rounded-lg border border-[#1E293B] self-start md:self-auto">
            6 Posiciones Técnicas Verificables
          </div>
        </div>

        {/* Timeline / Card List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-[#1E293B] before:hidden md:before:block">
          {cvData.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative md:pl-16 group"
            >
              {/* Timeline dot marker (Desktop) */}
              <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0B1222] border-2 border-[#10B981] items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-[#1E293B] hover:border-[#10B981]/50 transition-all duration-300 shadow-xl group-hover:shadow-glow-emerald">
                
                {/* Header of Card */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 mb-5 border-b border-[#1E293B]/80">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                        {getExperienceIcon(exp.badge)}
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-[#64748B]">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-[13px] text-[#94A3B8]">
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>{exp.company}</span>
                      </div>
                      <span className="text-[#1E293B] hidden sm:inline">•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#080E20] border border-[#1E293B] text-xs font-mono text-[#10B981] font-semibold self-start shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Functions & Achievements */}
                <div className="space-y-3.5">
                  <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    Funciones Principales y Logros Técnicos:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.functions.map((fn, fIdx) => (
                      <div 
                        key={fIdx}
                        className="p-3.5 rounded-xl bg-[#080E20]/70 border border-[#1E293B]/60 hover:border-[#1E293B] transition-colors"
                      >
                        <h4 className="text-xs sm:text-[13px] font-bold text-white flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                          <span>{fn.title}</span>
                        </h4>
                        <p className="text-xs text-[#94A3B8] leading-relaxed pl-3.5">
                          {fn.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
