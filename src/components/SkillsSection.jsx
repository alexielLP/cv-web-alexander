import React from 'react';
import { 
  Laptop, 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  Award, 
  Car, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function SkillsSection() {
  return (
    <section id="competencias" className="py-16 md:py-24 bg-[#080E20] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
            HERRAMIENTAS & CREDENCIALES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Competencias, Software & Formación
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
            Combinación de software técnico de análisis espacial y datos (240 h certificadas), doble formación profesional en la UNSA e idiomas aplicados al diálogo comunitario.
          </p>
        </div>

        {/* 3 Columns/Blocks Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Block 1: Software Especializado */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1222] border border-[#1E293B] shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1E293B]">
                <div className="p-2.5 rounded-xl bg-[#080E20] border border-[#1E293B]">
                  <Laptop className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Software Especializado</h3>
                  <span className="text-xs font-mono text-[#10B981]">240 Horas Certificadas (40 h c/u)</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {cvData.competencies.software.map((sw, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#080E20]/60 border border-[#1E293B]/70 hover:border-[#10B981]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                        {sw.name}
                      </span>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        {sw.hours}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                      <span>{sw.institution}</span>
                      <span className="font-mono text-[#64748B] text-[11px]">{sw.date}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#10B981]/80 mt-1">
                      {sw.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-[11px] font-mono text-[#64748B]">
              * Certificados emitidos por InfoUNSA y Mundo GIS
            </div>
          </div>

          {/* Block 2: Formación Académica & Credenciales */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1222] border border-[#1E293B] shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1E293B]">
                <div className="p-2.5 rounded-xl bg-[#080E20] border border-[#1E293B]">
                  <GraduationCap className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Formación Académica</h3>
                  <span className="text-xs font-mono text-[#10B981]">Doble Titulación & Colegiatura</span>
                </div>
              </div>

              <div className="space-y-4">
                {cvData.competencies.academic.map((acad, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-colors ${
                      acad.highlight 
                        ? 'bg-[#080E20] border-[#10B981]/30 shadow-sm' 
                        : 'bg-[#080E20]/60 border-[#1E293B]/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-white">
                        {acad.title}
                      </h4>
                      {acad.highlight && (
                        <span className="shrink-0 p-1 rounded bg-[#10B981]/15 text-[#10B981]">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#CBD5E1] font-medium mb-1">
                      {acad.institution}
                    </div>
                    <div className="text-[11px] text-[#64748B] mb-2">
                      {acad.faculty}
                    </div>
                    <div className="text-xs font-mono text-[#10B981] font-medium pt-2 border-t border-[#1E293B]/60">
                      {acad.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-[11px] font-mono text-[#64748B]">
              * Habilitación CQP y Licencia A-IIB vigentes
            </div>
          </div>

          {/* Block 3: Idiomas */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1222] border border-[#1E293B] shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1E293B]">
                <div className="p-2.5 rounded-xl bg-[#080E20] border border-[#1E293B]">
                  <Languages className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Idiomas</h3>
                  <span className="text-xs font-mono text-[#10B981]">Centro de Idiomas UNSA</span>
                </div>
              </div>

              <div className="space-y-4">
                {cvData.competencies.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080E20]/60 border border-[#1E293B]/70"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-base font-bold text-white">
                        {lang.language}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                        {lang.level}
                      </span>
                    </div>

                    {lang.period && (
                      <div className="text-[11px] font-mono text-[#64748B] mb-1.5">
                        Periodo: {lang.period}
                      </div>
                    )}

                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {lang.note}
                    </p>
                  </div>
                ))}

                {/* Highlight Quechua in community relationships */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30">
                  <div className="text-xs font-bold text-[#10B981] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Valor Agregado Social</span>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    El dominio de Quechua Intermedio permite generar confianza inmediata y empatía cultural en monitoreos ambientales participativos y asambleas comunales del corredor minero sur.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-[11px] font-mono text-[#64748B]">
              * Certificados oficiales Centro de Idiomas UNSA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
