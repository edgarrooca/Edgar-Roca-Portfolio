
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  const content = {
    es: { 
      portfolio: 'Proyectos', 
      about: 'Manifiesto', 
      contact: 'Contacto', 
      pricing: 'Planes',
      available: 'Disponible para nuevos proyectos'
    },
    en: { 
      portfolio: 'Work', 
      about: 'Manifesto', 
      contact: 'Contact', 
      pricing: 'Plans',
      available: 'Available for new projects'
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Clock Logic
    const updateTime = () => {
      const now = new Date();
      // Format based on language preference if desired, currently sticking to ES locale for consistency with location
      setTime(now.toLocaleTimeString('es-ES', { 
        timeZone: 'Europe/Madrid', 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 0; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-stone-950/80 backdrop-blur-md' : 'py-8'}`}>
      
      <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 relative z-10">
        
        {/* Logo / Name */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="group flex flex-col">
          <span className="font-serif text-xl md:text-2xl tracking-tighter group-hover:opacity-70 transition-opacity leading-none">
            <span className="text-white">EDGAR</span>
            <span className="text-stone-400 italic ml-1.5">ROCA</span>
          </span>
          <span className="text-stone-500 text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 mt-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{content[lang].available}</span> 
            <span className="hidden md:inline text-stone-700">|</span> 
            <span className="hidden md:inline">{time} VLC</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {['portafolio', 'servicios', 'inversion', 'trayectoria', 'contacto'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-xs font-mono text-stone-300 hover:text-white uppercase tracking-widest transition-colors relative group"
            >
              <span className="relative z-10">
                {id === 'portafolio' ? content[lang].portfolio : 
                 id === 'trayectoria' ? content[lang].about : 
                 id === 'contacto' ? content[lang].contact :
                 id === 'inversion' ? content[lang].pricing :
                 lang === 'es' ? 'Servicios' : 'Services'}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="flex gap-2 text-[10px] font-mono border-l border-stone-800 pl-6">
            <button onClick={() => setLang('es')} className={`${lang === 'es' ? 'text-white' : 'text-stone-600 hover:text-white'}`}>ES</button>
            <span className="text-stone-700">/</span>
            <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-white' : 'text-stone-600 hover:text-white'}`}>EN</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-stone-950 z-40 flex flex-col justify-center items-center gap-8 animate-fade-in">
           {['portafolio', 'servicios', 'inversion', 'trayectoria', 'contacto'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-3xl font-serif text-white hover:text-stone-400 transition-colors"
            >
               {id === 'portafolio' ? content[lang].portfolio : 
                id === 'trayectoria' ? content[lang].about : 
                id === 'contacto' ? content[lang].contact :
                id === 'inversion' ? content[lang].pricing :
                lang === 'es' ? 'Servicios' : 'Services'}
            </a>
          ))}
           <div className="flex gap-4 mt-8">
            <button onClick={() => {setLang('es'); setIsOpen(false)}} className="text-xl text-stone-300">ES</button>
            <button onClick={() => {setLang('en'); setIsOpen(false)}} className="text-xl text-stone-300">EN</button>
          </div>
        </div>
      )}
    </header>
  );
};
