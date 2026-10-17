import React from 'react';
import { ArrowUp, ShieldCheck, Heart, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B19] border-t border-[#1E293B] py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1E293B]/70">
          
          {/* Col 1: Identity & Brand (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] font-mono font-bold text-xs">
                AH
              </div>
              <span className="text-white font-bold text-base">
                {cvData.personal.fullName}
              </span>
            </div>

            <p className="text-[#94A3B8] leading-relaxed max-w-md">
              Licenciado en Química (UNSA, CQP N° 1591) y Técnico en Seguridad en Operaciones Mineras. Especialista en gestión y monitoreo ambiental integral multimatriz, fiscalización OEFA y calidad analítica ISO 17025.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Colegio Químico del Perú · CQP N.° 1591 (Habilitado)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono">
              Navegación Rápida
            </h4>
            <ul className="space-y-1.5 text-[#94A3B8]">
              <li>
                <a href="#perfil" className="hover:text-white transition-colors">Perfil Profesional</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">Experiencia Laboral</a>
              </li>
              <li>
                <a href="#monitoreo" className="hover:text-white transition-colors">Monitoreo & IGA</a>
              </li>
              <li>
                <a href="#competencias" className="hover:text-white transition-colors">Competencias & Software</a>
              </li>
              <li>
                <a href="#acreditaciones" className="hover:text-white transition-colors">Acreditaciones & Diplomados</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents & Quick Actions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono">
              Documentos Oficiales
            </h4>
            <div className="space-y-2">
              <a
                href={cvData.personal.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV - ALEXANDER HERRERA C..docx"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#080E20] border border-[#1E293B] text-[#10B981] hover:border-[#10B981]/50 text-xs font-mono transition-colors w-full"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Descargar CV (.docx)</span>
              </a>
              <div className="text-[11px] font-mono text-[#64748B]">
                Actualizado con 1,990+ horas lectivas, constancias de trabajo y habilitación colegiada CQP N° 1591.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {cvData.personal.fullName}. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080E20] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#10B981]/50 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#10B981]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
