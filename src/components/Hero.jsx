export default function Hero({ onPublish, onExplore }) {
  return (
    <section className="bg-white py-16 px-8 relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.3em] mb-4">
            Marketplace Oficial
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-7xl leading-tight mb-6 tracking-tight text-[#111]">
            Bienvenido a<br />
            <span className="text-[#00205B]">MarketSafe PUC</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-xl font-medium mb-10 leading-relaxed">
            La plataforma exclusiva para que la comunidad UC compre, venda y arriende con total confianza y seguridad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={onExplore}
              className="bg-[#00205B] text-white font-montserrat font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-[#003080] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Explorar Catálogo
            </button>
          </div>
        </div>

        {/* Right Content - Large PUC Logo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,32,91,0.12)] border border-gray-50 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_60px_120px_rgba(0,32,91,0.2)]">
            <img 
              src="/logos/logo-puc.png" 
              alt="Logo PUC Grande" 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative badges */}
          <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-2xl px-6 py-4 border border-gray-50 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Comunidad</p>
                <p className="text-sm font-black text-[#00205B] leading-none">100% Verificada</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
