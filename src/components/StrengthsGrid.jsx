import React from 'react';
import { 
  Activity, 
  FlaskConical, 
  Scale, 
  Compass, 
  Tag, 
  CheckCircle2 
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function StrengthsGrid() {
  const getStrengthIcon = (index) => {
    switch (index) {
      case 0:
        return <Activity className="w-6 h-6 text-[#10B981]" />;
      case 1:
        return <FlaskConical className="w-6 h-6 text-[#10B981]" />;
      case 2:
        return <Scale className="w-6 h-6 text-[#10B981]" />;
      case 3:
        return <Compass className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Activity className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#060B19] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
            VENTAJAS DIFERENCIALES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Diferenciación & Fortalezas Técnicas
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
            Cuatro pilares de especialización que combinan rigor científico, destreza instrumental en campo y articulación normativa.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cvData.strengths.map((item, idx) => (
            <div
              key={item.number}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-[#1E293B] hover:border-[#10B981]/50 hover:shadow-glow-emerald transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-extrabold text-[#10B981]/30 group-hover:text-[#10B981] transition-colors">
                    {item.number}
                  </span>
                  <div className="p-3 rounded-xl bg-[#080E20] border border-[#1E293B] group-hover:border-[#10B981]/40 transition-colors">
                    {getStrengthIcon(idx)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#10B981] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-[#10B981] mb-4 font-medium">
                  {item.subtitle}
                </div>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#1E293B]/70 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-[#080E20] text-[#CBD5E1] border border-[#1E293B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
