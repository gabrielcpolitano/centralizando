
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', shopName: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Real submission logic would go here
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Pronto para transformar sua barbearia?</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Nossa equipe entrará em contato para te ajudar a configurar sua agenda exclusiva e seu site em menos de 10 minutos.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <p className="text-slate-200">(11) 99999-9999</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <p className="text-slate-200">contato@centralizando.com.br</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full">
          {!sent ? (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: João Silva"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-red-500 transition-colors"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-red-500 transition-colors"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Nome da Barbearia</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Barber Shop São Paulo"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-red-500 transition-colors"
                  value={formState.shopName}
                  onChange={e => setFormState({...formState, shopName: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 mt-4"
              >
                Solicitar Acesso Grátis
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Ao clicar você concorda com nossos termos de uso e política de privacidade.
              </p>
            </form>
          ) : (
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h3>
              <p className="text-slate-600">Obrigado {formState.name}. Em breve entraremos em contato via WhatsApp com os próximos passos.</p>
              <button 
                onClick={() => setSent(false)}
                className="text-red-600 font-bold hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
