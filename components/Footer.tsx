
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">C</div>
            <span className="text-xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">CENTRALIZANDO</span>
          </a>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#hero" className="hover:text-red-600 transition-colors">Início</a>
            <a href="#features" className="hover:text-red-600 transition-colors">Recursos</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Preços</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contato</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#hero" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#hero" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Centralizando Tecnologia LTDA. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para barbeiros de verdade.</p>
        </div>
      </div>
    </footer>
  );
};
