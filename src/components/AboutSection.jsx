import React from 'react';
import { Sparkles, ShieldCheck, Microscope } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function AboutSection() {
  return (
    <section id="perfil" className="py-16 md:py-24 bg-[#080E20] border-t border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Section Header & Title */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <span className="inline-block text-[#10B981] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                {cvData.about.eyebrow}
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                {cvData.about.title}
              </h2>

              <div className="w-20 h-1 bg-[#10B981] rounded-full mb-6" />

              <div className="p-4 rounded-xl bg-[#0B1222] border border-[#1E293B] text-xs text-[#94A3B8] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Microscope className="w-4 h-4 text-[#10B981]" />
                  <span>Enfoque Multidisciplinario</span>
                </div>
                <p>
                  Articulación de la ciencia química pura con ingeniería ambiental aplicada, seguridad minera y diálogo comunitario.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Strategic Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {cvData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}

            {/* Strategic Value Proposition Highlight Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1222] border-l-4 border-l-[#10B981] border-y border-r border-[#1E293B] shadow-xl relative mt-8">
              <div className="flex items-center gap-2 text-[#10B981] font-mono text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-4 h-4 text-[#10B981]" />
                <span>Propuesta de Valor Estratégica</span>
              </div>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                "{cvData.about.valueProposition}"
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#64748B] pt-3 border-t border-[#1E293B]/60">
                <span>Rigor Científico + Viabilidad Operativa</span>
                <span className="text-[#10B981]">CQP N° 1591</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
