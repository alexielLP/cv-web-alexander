import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Search, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Hash, 
  Clock,
  Filter
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function CertificationsSection() {
  const [filter, setFilter] = useState('all'); // 'all', 'diploma', 'course'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = cvData.certifications.filter((cert) => {
    const matchesFilter = filter === 'all' || cert.category === filter;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.code && cert.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cert.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const diplomaCount = cvData.certifications.filter(c => c.category === 'diploma').length;
  const courseCount = cvData.certifications.filter(c => c.category === 'course').length;

  return (
    <section id="acreditaciones" className="py-16 md:py-24 bg-[#060B19] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
                1,990+ HORAS LECTIVAS AUDITABLES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Acreditaciones, Diplomados y Cursos
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
              Programas de posgrado, especializaciones del Colegio de Ingenieros del Perú, diplomados de 350 horas y talleres oficiales del OEFA.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs bg-[#0B1222] border border-[#1E293B] px-4 py-2 rounded-xl text-[#94A3B8]">
            <Clock className="w-4 h-4 text-[#10B981]" />
            <span>Total: <strong className="text-white">20 Certificaciones Oficiales</strong></span>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#080E20] border border-[#1E293B]">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#10B981] text-[#060B19] shadow-sm'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#0B1222]'
              }`}
            >
              Todos ({cvData.certifications.length})
            </button>
            <button
              onClick={() => setFilter('diploma')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                filter === 'diploma'
                  ? 'bg-[#10B981] text-[#060B19] shadow-sm'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#0B1222]'
              }`}
            >
              Especializaciones & Diplomados ({diplomaCount})
            </button>
            <button
              onClick={() => setFilter('course')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                filter === 'course'
                  ? 'bg-[#10B981] text-[#060B19] shadow-sm'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#0B1222]'
              }`}
            >
              Cursos & Talleres Técnicos ({courseCount})
            </button>
          </div>

          {/* Search box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por código, título o entidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080E20] border border-[#1E293B] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors font-mono"
            />
          </div>

        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-[#0B1222] border border-[#1E293B] hover:border-[#10B981]/50 hover:shadow-glow-emerald transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Type Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded ${
                    cert.category === 'diploma'
                      ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {cert.type}
                  </span>

                  {cert.hours && (
                    <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#10B981]" />
                      {cert.hours}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#10B981] transition-colors">
                  {cert.title}
                </h3>

                {/* Entity */}
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-3">
                  <Building2 className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                  <span className="truncate">{cert.entity}</span>
                </div>
              </div>

              {/* Bottom Info: Period & Code */}
              <div className="pt-3 border-t border-[#1E293B]/70 flex items-center justify-between gap-2 text-[11px] font-mono">
                <div className="flex items-center gap-1 text-[#64748B]">
                  <Calendar className="w-3 h-3 text-[#10B981]" />
                  <span>{cert.period}</span>
                </div>

                {cert.code && (
                  <span className="px-2 py-0.5 rounded bg-[#080E20] text-[#10B981] border border-[#1E293B] font-semibold" title="Código de Verificación">
                    {cert.code}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredCerts.length === 0 && (
          <div className="py-12 text-center bg-[#0B1222] rounded-2xl border border-[#1E293B]">
            <BookOpen className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
            <h4 className="text-white font-bold text-base mb-1">No se encontraron certificaciones</h4>
            <p className="text-xs text-[#94A3B8]">
              Intenta con otro término de búsqueda o cambia la categoría de filtro.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
