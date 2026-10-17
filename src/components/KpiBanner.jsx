import React from 'react';
import { Award, Layers, ShieldCheck, GraduationCap } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function KpiBanner() {
  const getKpiIcon = (index) => {
    switch(index) {
      case 0:
        return <Award className="w-5 h-5 text-[#10B981]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[#10B981]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#10B981]" />;
      case 3:
        return <GraduationCap className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Award className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <section className="border-y border-[#1E293B] bg-[#080E20]/90 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1E293B]/70">
          
          {cvData.kpis.map((kpi, idx) => (
            <div 
              key={kpi.id} 
              className={`flex flex-col justify-between ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6 lg:pl-8' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#10B981] tracking-tight">
                    {kpi.value}
                  </div>
                  <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
                    {getKpiIcon(idx)}
                  </div>
                </div>

                <h2 className="text-white text-base font-bold mb-2 tracking-tight">
                  {kpi.label}
                </h2>

                <p className="text-[#94A3B8] text-xs sm:text-[13px] leading-relaxed">
                  {kpi.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1E293B]/40 flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Datos 100% auditables y respaldados</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
