import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Clock,
  Car
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Monitoreo Ambiental Minero',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message URL as direct fallback so user's message is immediately sent
    const encodedMessage = encodeURIComponent(
      `Hola Alexander, mi nombre es ${formData.name} (${formData.email}).\n` +
      `Proyecto/Motivo: ${formData.projectType}\n` +
      `Mensaje: ${formData.message}`
    );
    const directWaUrl = `https://wa.me/51965969996?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Open WhatsApp with prefilled message
      window.open(directWaUrl, '_blank');
    }, 700);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#080E20] border-t border-[#1E293B] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
            COMUNICACIÓN DIRECTA & CONTRATACIÓN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Contacto Técnico & Disponibilidad
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
            Disponible para posiciones de Supervisor o Especialista Ambiental en unidad minera, proyectos hídricos, consultoría especializada o peritajes.
          </p>
        </div>

        {/* 2 Columns: Direct Info (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Clickable Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={cvData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0B1222] border border-[#1E293B] hover:border-[#10B981]/60 hover:shadow-glow-emerald transition-all duration-300 flex items-start gap-4 group block"
            >
              <div className="p-3 rounded-xl bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 group-hover:scale-110 transition-transform shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#10B981] font-semibold uppercase">
                    WhatsApp Directo
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#10B981] transition-colors" />
                </div>
                <div className="text-base font-bold text-white mt-0.5 font-mono">
                  {cvData.contact.whatsapp}
                </div>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Respuesta inmediata para coordinaciones y entrevistas.
                </p>
              </div>
            </a>

            {/* Email Cards */}
            <div className="p-5 rounded-2xl bg-[#0B1222] border border-[#1E293B] space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-[#1E293B]">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-mono text-white font-semibold uppercase">
                  Correos Electrónicos
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[#64748B] block text-[11px]">Correo Principal:</span>
                  <a 
                    href={`mailto:${cvData.contact.email}`}
                    className="text-white hover:text-[#10B981] font-mono transition-colors font-medium text-[13px]"
                  >
                    {cvData.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[11px]">Correo Institucional UNSA:</span>
                  <a 
                    href={`mailto:${cvData.contact.institutionalEmail}`}
                    className="text-[#94A3B8] hover:text-[#10B981] font-mono transition-colors text-xs"
                  >
                    {cvData.contact.institutionalEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Address */}
            <div className="p-5 rounded-2xl bg-[#0B1222] border border-[#1E293B]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-mono text-white font-semibold uppercase">
                  Ubicación & Residencia
                </span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-medium">
                {cvData.contact.address}
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#10B981]">
                <Clock className="w-3.5 h-3.5" />
                <span>Disponibilidad para traslados y régimen atípico</span>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="p-5 rounded-2xl bg-[#080E20] border border-[#1E293B] flex items-center justify-between text-xs font-mono">
              <div className="space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>{cvData.contact.cqpBadge}</span>
                </div>
                <div className="text-[#94A3B8] flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{cvData.contact.licenseBadge}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-[#1E293B] shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Enviar Mensaje Técnico
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
                Completa el siguiente formulario para coordinar propuestas laborales, auditorías ambientales o reuniones técnicas.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981] flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">¡Mensaje Preparado y Enviado!</h4>
                  <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                    Se ha abierto tu canal de mensajería para conectar directamente con Alexander. También puedes escribirle directamente a <strong>alexanderherreracari@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#10B981] hover:underline pt-2 font-mono"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Nombre Completo / Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Mendoza (Minera X)"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#080E20] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Correo de Contacto *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#080E20] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                      Área o Asunto del Proyecto *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-[#080E20] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#10B981] transition-colors"
                    >
                      <option value="Monitoreo Ambiental Minero">Monitoreo Ambiental Minero (Multimatriz)</option>
                      <option value="Calidad de Recursos Hídricos">Calidad de Recursos Hídricos & Represas (AUTODEMA/Cuencas)</option>
                      <option value="Fiscalización OEFA & Cumplimiento">Fiscalización OEFA & Defensa Técnica</option>
                      <option value="Supervisión en Unidad Minera">Supervisión en Unidad Minera (Régimen)</option>
                      <option value="Laboratorio ISO 17025">Laboratorio de Ensayos Fisicoquímicos (ISO 17025)</option>
                      <option value="Otro">Otro Asunto Profesional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                      Detalle del Requerimiento / Mensaje *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe la posición laboral, requerimiento de monitoreo o proyecto específico..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#080E20] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#10B981] text-[#060B19] hover:bg-[#059669] transition-all duration-200 shadow-md hover:shadow-glow-emerald disabled:opacity-50 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Enviar Mensaje Técnico</span>
                        <Send className="w-4 h-4 text-[#060B19]" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
