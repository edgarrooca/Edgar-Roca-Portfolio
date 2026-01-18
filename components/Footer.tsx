
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang = 'es' }) => {
  const [time, setTime] = useState('');

  const content = {
    es: {
      rights: "Todos los derechos reservados.",
      country: "España"
    },
    en: {
      rights: "All rights reserved.",
      country: "Spain"
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-ES', { 
        timeZone: 'Europe/Madrid', 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-stone-950 py-12 border-t border-stone-900 text-stone-500 text-xs font-mono uppercase tracking-widest">
      <div className="max-w-[95%] mx-auto px-4 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
        
        <div>
          <span className="block text-white mb-2">Edgar Roca</span>
          <span>&copy; 2024 {content[lang].rights}</span>
        </div>

        <div className="flex gap-8">
          <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a>
          <a href="mailto:edgarrooca@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-right">
          <span className="block mb-1">Valencia, {content[lang].country}</span>
          <span className="text-white">{time} CET</span>
        </div>

      </div>
    </footer>
  );
};
