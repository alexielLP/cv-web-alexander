import React from 'react';
import { 
  Droplet, 
  Wind, 
  Volume2, 
  FileCheck2, 
  Check, 
  ShieldCheck, 
  Cpu, 
  Radio 
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function MonitoringSection() {
  const getAreaIcon = (index) => {
    switch (index) {
      case 0:
        return <Droplet className="w-6 h-6 text-[#10B981]" />;
      case 1:
        return <Wind className="w-6 h-6 text-[#10B981]" />;
      case 2:
        return <Volume2 className="w-6 h-6 text-[#10B981]" />;
      case 3:
        return <FileCheck2 className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Droplet className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <section id="monitoreo" className="py-16 md:py-24 bg-[#060B19] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
            CAPACIDAD OPERATIVA & CUMPLIMIENTO REGULATORIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Monitoreo Ambiental & Instrumentos IGA
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
            Dominio integral de matrices ambientales bajo normativa peruana (ECA y LMP), aseguramiento de calidad QA/QC y defensa técnica ante el OEFA.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cvData.monitoringAreas.map((area, idx) => (
            <div
              key={area.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-[#1E293B] hover:border-[#10B981]/50 hover:shadow-glow-emerald transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Area Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#080E20] border border-[#1E293B]">
                    {getAreaIcon(idx)}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                    ÁREA 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">
                  {area.title}
                </h3>
                <div className="text-xs font-mono text-[#10B981] mb-4">
                  {area.subtitle}
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Tags & Protocols */}
              <div className="pt-4 border-t border-[#1E293B]/70">
                <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2.5">
                  Protocolos & Parámetros Dominados:
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-[#080E20] text-[#CBD5E1] border border-[#1E293B]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
