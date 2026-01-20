
import React from 'react';

export const WhatsAppDemo: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Notificações Inteligentes</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex shrink-0 items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Para Você: Novo Agendamento</h4>
                <p className="text-white/80">Assim que um cliente reserva, você recebe um WhatsApp detalhado com nome, serviço e horário. Sem checar o app toda hora.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex shrink-0 items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Para o Cliente: Lembrete Automático</h4>
                <p className="text-white/80">O sistema envia uma mensagem 1 hora antes do corte (ou o tempo que você definir). Reduza faltas em até 80%.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex shrink-0 items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Pós-Atendimento: Fidelização</h4>
                <p className="text-white/80">Envie um agradecimento automático e um link para o cliente avaliar seu serviço. Construa sua reputação online.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full max-w-sm mx-auto">
          {/* WhatsApp UI Simulation */}
          <div className="bg-[#e5ddd5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/wa/100/100" alt="Avatar" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-sm">Centralizando (Robô)</p>
                <p className="text-[10px] opacity-80">online</p>
              </div>
              <div className="flex gap-4 opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
              <div className="flex justify-center">
                <span className="bg-[#dcf8c6] text-[10px] py-1 px-3 rounded shadow-sm text-slate-600 uppercase">HOJE</span>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[85%] relative">
                <p className="text-sm font-bold text-green-700 mb-1">Centralizando</p>
                <p className="text-sm text-slate-800">
                  Olá <b>Marcus</b>! ✂️<br/><br/>
                  Confirmamos seu agendamento na <b>Vintage Cuts</b> hoje às <b>16:30</b>.<br/><br/>
                  Endereço: Rua das Barbearias, 123.<br/><br/>
                  Te esperamos lá!
                </p>
                <p className="text-[10px] text-slate-400 text-right mt-1">15:30</p>
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
              </div>

              <div className="bg-[#dcf8c6] p-3 rounded-lg shadow-sm max-w-[85%] ml-auto relative">
                <p className="text-sm text-slate-800">Legal! Obrigado pelo lembrete, já estou saindo de casa. 🚀</p>
                <p className="text-[10px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                  15:32 
                  <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                  </span>
                </p>
                <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-[#dcf8c6] border-r-[10px] border-r-transparent"></div>
              </div>
            </div>
            
            {/* Input */}
            <div className="p-2 bg-[#f0f0f0] flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <div className="bg-white rounded-full flex-grow px-4 py-2 text-sm text-slate-400">
                Mensagem
              </div>
              <div className="w-10 h-10 bg-[#075e54] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
