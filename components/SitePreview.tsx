
import React, { useState } from 'react';

export const SitePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'agenda' | 'fotos'>('home');

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Browser Mockup */}
      <div className="bg-slate-900 rounded-t-xl p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="bg-slate-800 rounded px-3 py-1 text-[10px] text-slate-400 font-mono ml-4 flex-grow max-w-md">
          suabarbearia.centralizando.com.br
        </div>
      </div>
      
      <div className="bg-white border-x-8 border-b-8 border-slate-900 rounded-b-2xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9] flex flex-col">
        {/* The Preview Site Navbar */}
        <div className="bg-white border-b border-slate-100 py-4 px-8 flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tighter italic">VINTAGE <span className="text-red-600">CUTS</span></div>
          <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase">
            <button onClick={() => setActiveTab('home')} className={`hover:text-red-600 transition-colors ${activeTab === 'home' ? 'text-red-600' : ''}`}>Início</button>
            <button onClick={() => setActiveTab('fotos')} className={`hover:text-red-600 transition-colors ${activeTab === 'fotos' ? 'text-red-600' : ''}`}>Fotos</button>
            <button onClick={() => setActiveTab('agenda')} className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors ${activeTab === 'agenda' ? 'ring-2 ring-red-200' : ''}`}>Agendar</button>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto bg-slate-50">
          {activeTab === 'home' && (
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-in fade-in duration-500">
              <div>
                <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 leading-none">O CORTE PERFEITO <br/>EXIGE HISTÓRIA.</h1>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Desde 2012 transformando visual e elevando a autoestima dos cavalheiros de São Paulo. Venha conhecer nosso espaço.
                </p>
                <div className="flex gap-3">
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Corte Simples</p>
                    <p className="text-lg font-bold text-slate-900">R$ 45,00</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Barba + Corte</p>
                    <p className="text-lg font-bold text-slate-900">R$ 80,00</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" alt="Barbeiro trabalhando" className="rounded-xl shadow-lg h-64 w-full object-cover" />
                <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-4 rounded-lg shadow-xl">
                  <p className="text-xs font-bold">Nota 4.9/5.0</p>
                  <p className="text-[10px] opacity-80">Baseado em 240 avaliações</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'agenda' && (
            <div className="p-8 max-w-md mx-auto animate-in zoom-in duration-300">
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="bg-red-600 p-4 text-white">
                  <h4 className="font-bold">Selecione o Horário</h4>
                  <p className="text-xs opacity-80">Terça-feira, 15 de Outubro</p>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(h => (
                    <button key={h} className="py-2 px-1 text-sm border border-slate-100 rounded hover:bg-red-50 hover:border-red-200 transition-colors font-medium">
                      {h}
                    </button>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center">
                  <a href="#contact" className="bg-slate-900 text-white px-6 py-2 rounded font-bold text-sm w-full text-center hover:bg-slate-800 transition-all">Finalizar Agendamento</a>
                </div>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-4 italic">Isso é uma demonstração de como seu cliente verá sua agenda.</p>
            </div>
          )}

          {activeTab === 'fotos' && (
            <div className="p-8 grid grid-cols-3 gap-4 animate-in slide-in-from-bottom duration-500">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 100}/300/300`} className="rounded-lg shadow-sm w-full aspect-square object-cover hover:scale-105 transition-transform" alt="Portfólio" />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 grid grid-cols-4 gap-4 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-red-600 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};
