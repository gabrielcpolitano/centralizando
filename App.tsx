
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SitePreview } from './components/SitePreview';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { GeminiAssistant } from './components/GeminiAssistant';

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);

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

      {/* Floating Action Button for AI Assistant */}
      <button 
        onClick={() => setShowAssistant(!showAssistant)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center gap-2"
      >
        <span className="hidden md:inline font-medium">Ajuda Inteligente</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
      </button>

      {showAssistant && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl relative overflow-hidden h-[80vh] flex flex-col">
            <button 
              onClick={() => setShowAssistant(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <GeminiAssistant />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
