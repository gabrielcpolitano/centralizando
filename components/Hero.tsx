
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 -z-10 rounded-bl-[200px] hidden lg:block"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-6 tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            A Evolução da Sua Barbearia
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            A sua agenda exclusiva com a <span className="text-red-600">cara do seu negócio.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Tenha seu próprio site personalizado, agendamento 24h e notificações automáticas via WhatsApp. Centralize tudo e foque no que você faz de melhor: <span className="font-semibold text-slate-900">cortar cabelo.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Criar Minha Agenda Grátis
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a 
              href="#preview"
              className="border-2 border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Ver Demonstração
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  alt="Barbeiro" 
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold text-slate-900">+500 Barbeiros</div>
              <div className="text-slate-500">Já usam a Centralizando</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-white">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
              alt="Barbearia Moderna" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Novo Agendamento</p>
                <p className="text-sm font-bold text-slate-900">João Silva - 14:30</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full -z-10 blur-xl"></div>
          <div className="absolute bottom-20 -right-20 w-48 h-48 bg-slate-900/5 rounded-full -z-10 blur-xl"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
