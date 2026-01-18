
import React, { useState } from 'react';
import { Send, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    plan: 'identity', // Default plan
    message: '' 
  });

  const content = {
    es: {
      contact: "Contacto",
      title: "Let's create",
      titleItalic: "together.",
      availability: "Disponibilidad actual:",
      status: "Aceptando nuevos proyectos",
      mind: "¿Qué tienes en mente?",
      options: {
        essence: "Plan Essence (Landing Page) - Desde 950€",
        identity: "Plan Identity (Web Corporativa) - Desde 2.400€",
        ecosystem: "Plan Ecosystem (E-commerce / App) - Desde 4.200€",
        other: "Consultoría / Otro"
      },
      send: "Enviar Mensaje",
      name: "Nombre",
      email: "Correo"
    },
    en: {
      contact: "Contact",
      title: "Let's create",
      titleItalic: "together.",
      availability: "Current Availability:",
      status: "Accepting new projects",
      mind: "What do you have in mind?",
      options: {
        essence: "Essence Plan (Landing Page) - From 950€",
        identity: "Identity Plan (Corporate Web) - From 2.400€",
        ecosystem: "Ecosystem Plan (E-commerce / App) - From 4.200€",
        other: "Consulting / Other"
      },
      send: "Send Message",
      name: "Name",
      email: "Email"
    }
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic placeholder
    console.log("Form submitted", formData);
  };

  return (
    <section id="contacto" className="py-32 bg-stone-950 text-white border-t border-stone-900">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-6">( {t.contact} )</h2>
            <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9]">
              {t.title} <br />
              <span className="italic text-stone-600">{t.titleItalic}</span>
            </h3>
            
            <div className="space-y-4 mt-16 text-stone-400 font-light text-lg">
                <a href="mailto:edgarrooca@gmail.com" className="block hover:text-white transition-colors">
                    edgarrooca@gmail.com
                </a>
                <a href="tel:+34603179945" className="block hover:text-white transition-colors">
                    +34 603 179 945
                </a>
            </div>
            
            <div className="mt-12 pt-12 border-t border-stone-900">
               <p className="text-sm text-stone-500 mb-4">{t.availability}</p>
               <div className="flex items-center gap-3">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                 </span>
                 <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">{t.status}</span>
               </div>
            </div>
          </div>

          <div className="lg:pt-24 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group relative">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <label className="absolute left-0 top-4 text-stone-500 text-xl transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-stone-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-400 cursor-text">{t.name}</label>
              </div>
              <div className="group relative">
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label className="absolute left-0 top-4 text-stone-500 text-xl transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-stone-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-400 cursor-text">{t.email}</label>
              </div>

              {/* Plan Selector */}
              <div className="group relative">
                 <label className="block text-stone-500 text-xs uppercase tracking-widest mb-4">{t.mind}</label>
                 <select 
                   value={formData.plan}
                   onChange={(e) => setFormData({...formData, plan: e.target.value})}
                   className="w-full bg-stone-900 border border-stone-800 text-white py-4 px-4 focus:outline-none focus:border-bronze-500 transition-colors appearance-none rounded-none"
                 >
                   <option value="essence">{t.options.essence}</option>
                   <option value="identity">{t.options.identity}</option>
                   <option value="ecosystem">{t.options.ecosystem}</option>
                   <option value="other">{t.options.other}</option>
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-8 text-stone-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                 </div>
              </div>
              
              <button
                type="submit"
                className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-all duration-300 pt-8"
              >
                {t.send}
                <span className="block w-12 h-px bg-stone-700 group-hover:bg-white transition-colors"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
