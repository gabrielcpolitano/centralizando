
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-3">Planos e Preços</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Escolha o melhor para sua barbearia</h3>
          <p className="text-slate-600 max-w-xl mx-auto">Sem taxas escondidas. Cancele quando quiser.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-red-200 transition-all hover:shadow-2xl flex flex-col">
            <h4 className="text-xl font-bold mb-2">Iniciante</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-slate-900">R$ 49</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Agenda Online Exclusiva
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Até 200 Agendamentos/mês
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Site Padrão Personalizável
              </li>
            </ul>
            <a 
              href="#contact"
              className="w-full py-4 text-center rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors"
            >
              Começar Plano
            </a>
          </div>
          
          {/* Plan 2 - Featured */}
          <div className="bg-slate-900 p-10 rounded-3xl relative text-white shadow-2xl scale-105 flex flex-col z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Mais Popular</div>
            <h4 className="text-xl font-bold mb-2">Profissional</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">R$ 89</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M20 6 9 17l-5-5"/></svg>
                Agenda Ilimitada
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M20 6 9 17l-5-5"/></svg>
                Notificações WhatsApp inclusas
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M20 6 9 17l-5-5"/></svg>
                Site com Sua História & Fotos
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M20 6 9 17l-5-5"/></svg>
                Suporte Prioritário
              </li>
            </ul>
            <a 
              href="#contact"
              className="w-full py-4 text-center rounded-xl bg-red-600 font-bold hover:bg-red-700 transition-colors shadow-xl shadow-red-900/40"
            >
              Assinar Agora
            </a>
          </div>
          
          {/* Plan 3 */}
          <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-red-200 transition-all hover:shadow-2xl flex flex-col">
            <h4 className="text-xl font-bold mb-2">Equipe (Max)</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-slate-900">R$ 149</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Tudo do Plano Profissional
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Até 10 Barbeiros na mesma agenda
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                Dashboard de Comissão e Vendas
              </li>
            </ul>
            <a 
              href="#contact"
              className="w-full py-4 text-center rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
