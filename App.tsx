
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('es');

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 overflow-x-hidden selection:bg-bronze-500 selection:text-white">
      <Cursor />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Portfolio lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Testimonials lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
