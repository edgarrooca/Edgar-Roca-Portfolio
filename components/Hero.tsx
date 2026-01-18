
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    es: {
      role: 'Creative Developer & Filmmaker',
      location: 'Valencia — Worldwide',
      intro: 'Ingeniería visual & Código artesanal.',
      desc: 'Fusiono la sensibilidad cinematográfica con la arquitectura de software. No hago webs, construyo atmósferas digitales.',
      scroll: 'Deslizar'
    },
    en: {
      role: 'Creative Developer & Filmmaker',
      location: 'Valencia — Worldwide',
      intro: 'Visual engineering & Crafted code.',
      desc: 'Merging cinematic sensitivity with software architecture. I don\'t just make websites; I build digital atmospheres.',
      scroll: 'Scroll'
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-stone-950">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Gradient Ambient Light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-stone-800 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-stone-700 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-[95%] mx-auto w-full">
        
        {/* Top Meta Data */}
        <div className="flex justify-between items-end border-b border-stone-800 pb-4 mb-12 lg:mb-20 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-mono text-xs md:text-sm text-stone-500 uppercase tracking-widest flex items-center gap-2">
            {content[lang].location}
          </span>
          <span className="font-mono text-xs md:text-sm text-stone-500 uppercase tracking-widest text-right leading-tight">{content[lang].intro}</span>
        </div>

        {/* Kinetic Typography */}
        <div className="flex flex-col">
          <h1 className="font-serif text-[13vw] leading-[0.85] text-white mix-blend-difference tracking-tighter opacity-0 animate-slide-up cursor-default select-none" style={{ animationDelay: '0.4s' }}>
            <span className="block hover:translate-x-4 transition-transform duration-700 ease-out">EDGAR</span>
            <span className="block text-right italic text-stone-600 hover:-translate-x-4 transition-transform duration-700 ease-out">ROCA</span>
          </h1>
        </div>

        {/* Bottom Description */}
        <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 opacity-0 animate-slide-up items-end" style={{ animationDelay: '0.8s' }}>
          <div className="lg:col-span-6 lg:col-start-7 text-right">
            <p className="text-stone-400 font-light text-lg md:text-xl leading-relaxed ml-auto max-w-2xl">
              {content[lang].desc}
            </p>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce duration-[2000ms]">
        <span className="text-[10px] uppercase tracking-widest text-stone-500">{content[lang].scroll}</span>
        <ArrowDown className="h-4 w-4 text-stone-500" />
      </div>

    </section>
  );
};
