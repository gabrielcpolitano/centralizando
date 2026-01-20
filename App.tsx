
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SitePreview } from './components/SitePreview';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-red-200 selection:text-red-900">
      <Navbar />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="bg-slate-50 py-20">
          <Features />
        </section>

        <section id="preview" className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Seu Site, Sua Cara</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Na Centralizando, você não ganha apenas uma agenda. Você ganha uma presença digital robusta que reflete a alma da sua barbearia.
              </p>
            </div>
            <SitePreview />
          </div>
        </section>

        <section id="whatsapp" className="py-20 bg-red-600 text-white">
          <WhatsAppDemo />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <ContactForm />
        </section>
      </main>

      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5516994308140"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center gap-2 group"
        title="Chame no WhatsApp"
      >
        <span className="hidden md:inline font-bold px-2">Chame no WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
};

export default App;
