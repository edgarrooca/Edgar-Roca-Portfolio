
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Language } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  lang: Language;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, lang }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Sync shouldRender with isOpen to handle mounting
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    }
    // Note: We don't set shouldRender to false here immediately. 
    // We wait for onAnimationEnd.
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
      document.body.style.overflow = 'unset';
    }
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col bg-stone-950 overflow-hidden ${isOpen ? 'animate-slide-up' : 'animate-slide-down'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      
      {/* Top Bar (Sticky) */}
      <div className="flex justify-between items-center p-6 md:p-8 border-b border-stone-900 bg-stone-950/80 backdrop-blur-md z-50 absolute top-0 left-0 w-full">
        <div className="flex flex-col">
             <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
               {lang === 'es' ? 'Caso de Estudio' : 'Case Study'}
             </span>
             <h3 className="text-xl font-serif text-white">{title}</h3>
        </div>
        
        <button
          onClick={onClose}
          className="group flex items-center gap-3 text-stone-400 hover:text-white transition-colors cursor-pointer"
          aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
        >
          <span className="hidden md:block text-xs font-mono uppercase tracking-widest group-hover:underline decoration-bronze-500 underline-offset-4">
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </span>
          <div className="p-2 border border-stone-800 rounded-full group-hover:border-white transition-colors">
             <X className="h-5 w-5" />
          </div>
        </button>
      </div>

      {/* Content Scrollable Area */}
      <div 
        ref={modalRef}
        className="flex-1 overflow-y-auto custom-scrollbar pt-32 md:pt-40 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           {children}
        </div>
      </div>
    </div>
  );
};
