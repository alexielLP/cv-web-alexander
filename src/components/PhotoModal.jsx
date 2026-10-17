import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { cvData } from '../data/cvData';

export default function PhotoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#0B1222] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E293B] bg-[#080E20]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span className="text-white font-medium text-sm">
              Fotografía Oficial Verificada · {cvData.personal.fullName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photo view */}
        <div className="relative bg-[#060B19] p-6 flex flex-col items-center justify-center">
          <div className="relative rounded-xl overflow-hidden border border-[#10B981]/40 shadow-glow-emerald max-h-[70vh]">
            <img
              src={cvData.personal.photoUrl}
              alt={cvData.personal.fullName}
              className="max-h-[60vh] w-auto object-contain"
            />
            
            {/* Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#10B981] text-[#060B19] shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5" />
                LICENCIADO UNSA
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#0B1222]/90 text-white border border-[#1E293B] backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                Arequipa, Perú
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#1E293B] bg-[#080E20]">
          <div className="text-xs font-mono text-[#94A3B8]">
            <span className="text-[#10B981] font-semibold">{cvData.personal.cqpFormatted}</span> · {cvData.personal.licenseShort}
          </div>
          <a
            href={cvData.personal.photoUrl}
            download="AHC FOTO PASAPORTE.jpg"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Descargar Foto HD
          </a>
        </div>
      </div>
    </div>
  );
}
