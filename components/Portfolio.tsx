
import React, { useState, useMemo } from 'react';
import { Modal } from './Modal';
import { PortfolioItem, Language } from '../types';
import { ArrowUpRight, Play, Layers, LayoutGrid, List, ArrowRight, Code2, Zap, Check, Eye, ShieldCheck } from 'lucide-react';

interface PortfolioProps {
  lang: Language;
}

type FilterType = 'all' | 'web' | 'video';
type ViewMode = 'list' | 'grid';

// Componente para el círculo de Lighthouse
const LighthouseCircle = ({ score, label, icon: Icon }: { score: number, label: string, icon: any }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-20 h-20">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-stone-800"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-emerald-500 transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-emerald-500 font-mono text-lg font-bold">{score}</span>
      </div>
      <div className="flex items-center gap-2 text-stone-500">
        <Icon className="h-3 w-3" />
        <span className="text-[10px] uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<FilterType>('web');
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const content = {
    es: {
      sectionTitle: "( Proyectos Seleccionados )",
      recentProjects: "Proyectos Recientes",
      viewProject: "Ver Proyecto",
      backIndex: "Volver al índice",
      challenge: "El Reto",
      solution: "La Solución",
      impact: "Impacto Medible",
      services: "Servicios",
      gallery: "Galería del Proyecto",
      visit: "Visitar Web",
      web: "Web Dev",
      video: "Cine & Vídeo",
      all: "Todos",
      metrics: "Métricas de Rendimiento (Lighthouse)",
      stack: "Tecnologías",
      confidential: "Confidencial",
      defaultSolution: "Una solución digital hecha a medida.",
      perf: "Rendimiento",
      access: "Accesibilidad",
      best: "Prácticas",
      seo: "SEO"
    },
    en: {
      sectionTitle: "( Selected Works )",
      recentProjects: "Selected Works",
      viewProject: "View Project",
      backIndex: "Back to index",
      challenge: "The Challenge",
      solution: "The Solution",
      impact: "Measurable Impact",
      services: "Services",
      gallery: "Project Gallery",
      visit: "Visit Website",
      web: "Web Dev",
      video: "Film & Motion",
      all: "All",
      metrics: "Performance Metrics (Lighthouse)",
      stack: "Tech Stack",
      confidential: "Confidential",
      defaultSolution: "A custom tailored digital solution.",
      perf: "Performance",
      access: "Accessibility",
      best: "Best Practices",
      seo: "SEO"
    }
  };

  const t = content[lang];

  const getProjects = (l: Language): PortfolioItem[] => {
    if (l === 'en') {
        return [
          {
            id: '1',
            type: 'web',
            title: 'El Carmen',
            category: 'Gastronomy / UX',
            client: 'Grupo El Carmen',
            year: '2023',
            url: 'https://example.com',
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            mobileImageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            gallery: [
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'An immersive digital experience for a fine dining restaurant looking to transfer its physical atmosphere to the digital environment.',
            challenge: 'The main challenge was to translate the sensory experience (smell, taste, textures) to a two-dimensional screen without losing elegance. The client needed to increase direct reservations by 30%.',
            solution: 'I designed an interface based on macro photography and editorial typography. I implemented a custom headless reservation system that reduces friction on mobile. I used liquid transitions with GSAP to simulate wine pouring.',
            impact: '+45% Online Reservations in the first month.',
            stack: ['Next.js', 'Tailwind', 'GSAP', 'Sanity CMS']
          },
          {
            id: '2',
            type: 'video',
            title: 'Neon Nights',
            category: 'Music Video',
            client: 'Sony Music',
            year: '2023',
            imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            description: 'Director of photography and color grading for an urban music video.',
            challenge: 'Filming in extreme lighting conditions with a low budget.',
            solution: 'Use of practical lights and Blade Runner style color grading in DaVinci Resolve.',
            stack: ['DaVinci Resolve', 'Sony A7SIII', 'After Effects']
          },
          {
            id: '3',
            type: 'web',
            title: 'Ruzafa Living',
            category: 'Real Estate',
            client: 'InmoValencia',
            year: '2024',
            imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            mobileImageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            gallery: [
               'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            ],
            description: 'Boutique platform for luxury property sales in the Ruzafa neighborhood.',
            challenge: 'Differentiate from massive real estate portals (Idealista, Fotocasa) and sell a lifestyle.',
            solution: 'Minimalist UI where the image occupies 90% of the screen. Custom interactive maps with Mapbox to show neighborhood points of interest.',
            impact: 'Sold out the entire promotion in 3 months.',
            stack: ['React', 'Mapbox GL', 'Firebase', 'Framer Motion']
          },
          {
            id: '4',
            type: 'video',
            title: 'Mediterranean Soul',
            category: 'Brand Film',
            client: 'EcoWear',
            year: '2022',
            imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            description: 'Audiovisual campaign for a sustainable clothing brand.',
            challenge: 'Convey calm and nature.',
            solution: 'Natural light, 50fps, and ASMR sound design.',
            stack: ['Premiere Pro', 'Sound Design']
          },
          {
            id: '5',
            type: 'web',
            title: 'Digital Craft',
            category: 'E-commerce',
            client: 'Cerámicas Manises',
            year: '2024',
            imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            mobileImageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Portfolio for a ceramics studio.',
            challenge: 'Show physical textures on a flat screen.',
            solution: 'WebGL shaders (Three.js) to simulate relief and interactive lighting on product photos.',
            stack: ['Three.js', 'React Three Fiber', 'Shopify API']
          }
        ];
    }
    return [
      {
        id: '1',
        type: 'web',
        title: 'El Carmen',
        category: 'Gastronomía / UX',
        client: 'Grupo El Carmen',
        year: '2023',
        url: 'https://example.com',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        mobileImageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        description: 'Una experiencia digital inmersiva para un restaurante de alta cocina que buscaba trasladar su atmósfera física al entorno digital.',
        challenge: 'El principal reto fue trasladar la experiencia sensorial (olor, sabor, texturas) a una pantalla bidimensional sin perder la elegancia. El cliente necesitaba aumentar las reservas directas en un 30%.',
        solution: 'Diseñé una interfaz basada en fotografía macro y tipografía editorial. Implementé un sistema de reservas personalizado ("headless") que reduce la fricción en móvil. Usé transiciones líquidas con GSAP para simular el vertido de vino.',
        impact: '+45% Reservas Online en el primer mes.',
        stack: ['Next.js', 'Tailwind', 'GSAP', 'Sanity CMS']
      },
      {
        id: '2',
        type: 'video',
        title: 'Neon Nights',
        category: 'Videoclip',
        client: 'Sony Music',
        year: '2023',
        imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'Dirección de fotografía y color grading para videoclip urbano.',
        challenge: 'Grabar en condiciones de luz extremas y bajo presupuesto.',
        solution: 'Uso de luces prácticas y etalonaje estilo Blade Runner en DaVinci Resolve.',
        stack: ['DaVinci Resolve', 'Sony A7SIII', 'After Effects']
      },
      {
        id: '3',
        type: 'web',
        title: 'Ruzafa Living',
        category: 'Inmobiliaria',
        client: 'InmoValencia',
        year: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        mobileImageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        gallery: [
           'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        ],
        description: 'Plataforma boutique para venta de propiedades de lujo en el barrio de Ruzafa.',
        challenge: 'Diferenciarse de los portales inmobiliarios masivos (Idealista, Fotocasa) y vender un estilo de vida.',
        solution: 'UI minimalista donde la imagen ocupa el 90% de la pantalla. Mapas interactivos personalizados con Mapbox para mostrar puntos de interés del barrio.',
        impact: 'Venta de la promoción completa en 3 meses.',
        stack: ['React', 'Mapbox GL', 'Firebase', 'Framer Motion']
      },
      {
        id: '4',
        type: 'video',
        title: 'Mediterranean Soul',
        category: 'Brand Film',
        client: 'EcoWear',
        year: '2022',
        imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'Campaña audiovisual para marca de ropa sostenible.',
        challenge: 'Transmitir calma y naturaleza.',
        solution: 'Luz natural, 50fps y diseño sonoro ASMR.',
        stack: ['Premiere Pro', 'Sound Design']
      },
      {
        id: '5',
        type: 'web',
        title: 'Artesanía Digital',
        category: 'E-commerce',
        client: 'Cerámicas Manises',
        year: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        mobileImageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Portfolio para estudio de cerámica.',
        challenge: 'Mostrar texturas físicas en pantalla plana.',
        solution: 'WebGL shaders (Three.js) para simular relieve e iluminación interactiva sobre las fotos de producto.',
        stack: ['Three.js', 'React Three Fiber', 'Shopify API']
      }
    ];
  };

  const projects = getProjects(lang);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.type === filter);
  }, [filter, projects]);

  return (
    <section id="portafolio" className="bg-stone-950 py-20 lg:py-32">
      <div className="max-w-[95%] mx-auto px-4">
        
        {/* Header, Filter & View Toggle */}
        <div className="flex flex-col xl:flex-row justify-between items-end mb-24 border-b border-stone-800 pb-8 gap-8">
           <div className="w-full xl:w-auto">
             <h2 className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-4">{t.sectionTitle}</h2>
             <h3 className="text-white font-serif text-4xl">{t.recentProjects}</h3>
           </div>

           <div className="flex flex-col md:flex-row w-full xl:w-auto gap-8 md:gap-16 items-start md:items-center">
               {/* Filter Tabs */}
               <div className="flex gap-8 text-sm font-mono uppercase tracking-widest">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`transition-colors ${filter === 'all' ? 'text-white underline underline-offset-8 decoration-bronze-500' : 'text-stone-600 hover:text-stone-400'}`}
                  >
                    {t.all}
                  </button>
                  <button 
                    onClick={() => setFilter('web')}
                    className={`transition-colors ${filter === 'web' ? 'text-white underline underline-offset-8 decoration-bronze-500' : 'text-stone-600 hover:text-stone-400'}`}
                  >
                    {t.web}
                  </button>
                  <button 
                    onClick={() => setFilter('video')}
                    className={`transition-colors ${filter === 'video' ? 'text-white underline underline-offset-8 decoration-bronze-500' : 'text-stone-600 hover:text-stone-400'}`}
                  >
                    {t.video}
                  </button>
               </div>

               {/* View Toggle */}
               <div className="flex items-center gap-2 border-l border-stone-800 pl-8">
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-white text-stone-950' : 'text-stone-500 hover:text-white'}`}
                    aria-label="List View"
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-white text-stone-950' : 'text-stone-500 hover:text-white'}`}
                    aria-label="Grid View"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
               </div>
           </div>
        </div>

        {/* Projects Container */}
        <div className={viewMode === 'list' ? "space-y-32" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* === LIST VIEW MODE === */}
              {viewMode === 'list' ? (
                <>
                  {/* Web Layout List */}
                  {project.type === 'web' ? (
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                       {/* Visual Composition */}
                       <div className="w-full lg:w-7/12 relative perspective-1000">
                          <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl bg-stone-900 aspect-[16/10] border border-stone-800 group-hover:border-stone-600 transition-colors duration-500">
                            <img 
                              src={project.imageUrl} 
                              alt={`${project.title} Desktop`} 
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                          </div>

                          {project.mobileImageUrl && (
                            <div className="absolute -bottom-10 -right-4 w-[25%] aspect-[9/19] z-20 bg-stone-900 rounded-2xl border-[4px] border-stone-800 shadow-2xl transform translate-y-4 lg:translate-y-8 lg:translate-x-8 group-hover:translate-y-0 group-hover:translate-x-4 transition-transform duration-700 ease-out">
                              <img 
                                src={project.mobileImageUrl} 
                                alt={`${project.title} Mobile`} 
                                className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100"
                              />
                            </div>
                          )}
                       </div>

                       {/* Info Web */}
                       <div className="w-full lg:w-4/12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-6">
                            <Layers className="h-4 w-4 text-stone-500" />
                            <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">{project.category}</span>
                          </div>
                          
                          <h3 className="text-5xl lg:text-6xl font-serif text-white mb-6 group-hover:text-stone-200 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-stone-400 text-lg font-light leading-relaxed mb-8 border-l border-stone-800 pl-6">
                            {project.description}
                          </p>

                          <div className="flex items-center gap-2 text-white border-b border-white pb-1 w-fit opacity-50 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-xs uppercase tracking-widest font-bold">{t.viewProject}</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                       </div>
                    </div>
                  ) : (
                    /* Video Layout List */
                    <div className="relative w-full">
                       <div className="relative w-full aspect-[21/9] lg:aspect-[2.35/1] overflow-hidden bg-stone-900 border border-stone-800 group-hover:border-stone-600 transition-colors duration-500">
                          <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                                <Play className="h-8 w-8 text-white ml-1 group-hover:text-stone-950 transition-colors" />
                             </div>
                          </div>
                          <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full bg-gradient-to-t from-stone-950 to-transparent">
                             <div className="flex justify-between items-end">
                                <div>
                                  <span className="text-xs font-mono text-stone-300 uppercase tracking-widest mb-2 block">{project.category}</span>
                                  <h3 className="text-4xl lg:text-5xl font-serif text-white">{project.title}</h3>
                                </div>
                                <span className="hidden md:block text-stone-400 text-sm font-light max-w-xs text-right">
                                  {project.description}
                                </span>
                             </div>
                          </div>
                       </div>
                    </div>
                  )}
                </>
              ) : (
                /* === GRID VIEW MODE === */
                <div className="relative aspect-square w-full overflow-hidden bg-stone-900 border border-stone-800 rounded-sm">
                   <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-40"
                   />
                   <div className="absolute top-4 right-4 bg-stone-950/50 backdrop-blur-md p-2 rounded-full border border-white/10 z-20 transition-opacity duration-300 group-hover:opacity-0">
                      {project.type === 'video' ? <Play className="h-3 w-3 text-white" fill="currentColor" /> : <ArrowUpRight className="h-3 w-3 text-white" />}
                   </div>
                   <div className="absolute top-0 left-0 p-6 lg:p-8 flex flex-col items-start z-30 pointer-events-none">
                      <span className="text-bronze-500 font-mono text-[10px] uppercase tracking-widest mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        {project.category}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-serif text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                        {project.title}
                      </h3>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* --- IMMERSIVE CASE STUDY MODAL --- */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        lang={lang}
      >
        {selectedProject && (
          <div className="animate-fade-in">
            
            {/* 1. Hero Title Section */}
            <div className="mb-16 border-b border-stone-900 pb-16">
              <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-12">
                 <h2 className="text-6xl md:text-8xl font-serif text-white leading-[0.9]">
                   {selectedProject.title}
                 </h2>
                 <div className="flex flex-col items-start lg:items-end gap-2 text-stone-500 font-mono text-sm uppercase tracking-widest">
                   <span>{selectedProject.year || '2023'}</span>
                   <span>{selectedProject.client || t.confidential}</span>
                 </div>
              </div>
              
              <div className="w-full aspect-video bg-stone-900 overflow-hidden relative border border-stone-800">
                 <img 
                    src={selectedProject.imageUrl} 
                    alt="Main view" 
                    className="w-full h-full object-cover opacity-90"
                 />
                 {selectedProject.type === 'web' && (
                   <div className="absolute bottom-8 right-8 bg-stone-950/80 backdrop-blur p-4 border border-stone-800">
                      <Layers className="h-6 w-6 text-white" />
                   </div>
                 )}
              </div>
            </div>

            {/* 2. Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
               {/* Left: Narrative (8 cols) */}
               <div className="lg:col-span-8 space-y-12">
                  <div>
                    <h4 className="text-xs font-bold text-bronze-500 uppercase tracking-[0.2em] mb-6">{t.challenge}</h4>
                    <p className="text-xl md:text-2xl text-stone-300 font-serif leading-relaxed">
                      {selectedProject.challenge || selectedProject.description}
                    </p>
                  </div>
                  <div>
                     <h4 className="text-xs font-bold text-stone-600 uppercase tracking-[0.2em] mb-6">{t.solution}</h4>
                     <p className="text-lg text-stone-400 font-light leading-relaxed">
                       {selectedProject.solution || t.defaultSolution}
                     </p>
                  </div>

                  {/* LIGHTHOUSE METRICS */}
                  {selectedProject.type === 'web' && (
                    <div className="pt-8 border-t border-stone-900">
                      <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-8">{t.metrics}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <LighthouseCircle score={100} label={t.perf} icon={Zap} />
                        <LighthouseCircle score={100} label={t.access} icon={Eye} />
                        <LighthouseCircle score={100} label={t.best} icon={Check} />
                        <LighthouseCircle score={100} label={t.seo} icon={ShieldCheck} />
                      </div>
                    </div>
                  )}

                  {selectedProject.impact && (
                     <div className="p-8 border border-stone-800 bg-stone-900/50 mt-8">
                        <span className="block text-4xl md:text-5xl font-serif text-white mb-2">{selectedProject.impact}</span>
                        <span className="text-stone-500 text-xs uppercase tracking-widest">{t.impact}</span>
                     </div>
                  )}
               </div>

               {/* Right: Meta & Stack (4 cols) */}
               <div className="lg:col-span-4 space-y-12 lg:border-l lg:border-stone-900 lg:pl-12">
                  <div>
                    <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">{t.services}</h5>
                    <p className="text-white text-lg">{selectedProject.category}</p>
                  </div>
                  
                  {selectedProject.stack && (
                    <div>
                      <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code2 className="h-3 w-3" /> {t.stack}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 border border-stone-800 text-stone-400 text-xs font-mono bg-stone-900/50 hover:bg-stone-800 transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.url && (
                     <a 
                       href={selectedProject.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group flex items-center justify-between w-full p-6 bg-white hover:bg-bronze-500 transition-colors duration-300 text-stone-950 hover:text-white mt-8"
                     >
                        <span className="font-bold uppercase tracking-widest text-xs">{t.visit}</span>
                        <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                  )}
               </div>
            </div>

            {/* 3. Masonry Gallery */}
            {(selectedProject.gallery || selectedProject.mobileImageUrl) && (
              <div className="mb-24">
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-[0.2em] mb-12 text-center">{t.gallery}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {selectedProject.mobileImageUrl && (
                      <div className="bg-stone-900 p-12 flex justify-center items-center border border-stone-800 md:col-span-1 row-span-2">
                         <img src={selectedProject.mobileImageUrl} className="w-[60%] shadow-2xl rounded-2xl border border-stone-800" alt="Mobile UI" />
                      </div>
                   )}
                   {selectedProject.gallery?.map((img, i) => (
                      <div key={i} className="aspect-[4/3] bg-stone-900 overflow-hidden border border-stone-800">
                        <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery item" />
                      </div>
                   ))}
                </div>
              </div>
            )}

            <div className="flex justify-end border-t border-stone-900 pt-12">
               <button onClick={() => setSelectedProject(null)} className="text-stone-500 hover:text-white transition-colors flex items-center gap-4 group">
                  <span className="font-serif text-2xl md:text-4xl text-stone-700 group-hover:text-white transition-colors">{t.backIndex}</span>
                  <ArrowRight className="h-6 w-6" />
               </button>
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
};
