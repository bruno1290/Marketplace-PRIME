export default function Hero({ onPublish, onExplore }) {
  return (
    <section className="flex min-h-[88vh] overflow-hidden">
      {/* Left — text */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 py-16 max-w-2xl">
        <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-7xl text-[#00205B] leading-tight mb-6">
          Marketplace<br />para<br />Universidades
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-md">
          La primera plataforma de compra y venta diseñada exclusivamente para universitarios chilenos, construida para tu campus.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={onExplore}
            className="bg-[#1a1a1a] hover:bg-black text-white font-montserrat font-bold px-7 py-4 rounded-xl text-base transition-colors">
            Ver publicaciones
          </button>
          <button onClick={onPublish}
            className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-gray-50 font-montserrat font-bold px-7 py-4 rounded-xl text-base transition-colors">
            Publicar gratis
          </button>
        </div>
      </div>

      {/* Right — navy panel + phone mockup */}
      <div className="hidden lg:flex flex-1 bg-[#00205B] items-center justify-center relative overflow-hidden">
        {/* Decorative floating icons */}
        {['📱','👕','📚','🎟️','💪','🏠'].map((icon, i) => (
          <div key={i} className="absolute text-white/10 text-5xl select-none"
            style={{
              top: `${[15,65,30,75,10,55][i]}%`,
              left: `${[5,10,75,70,45,80][i]}%`,
              transform: `rotate(${[-15,20,-10,15,-20,10][i]}deg)`
            }}>
            {icon}
          </div>
        ))}

        {/* CSS Phone Mockup */}
        <div className="relative z-10 w-64 h-[520px] bg-white rounded-[40px] shadow-2xl border-4 border-white/20 overflow-hidden flex flex-col">
          {/* Phone notch */}
          <div className="h-6 bg-white flex items-center justify-center shrink-0">
            <div className="w-20 h-3 bg-gray-200 rounded-full" />
          </div>

          {/* App header */}
          <div className="px-4 py-2 border-b border-gray-100 shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 font-semibold">Hola 👋</p>
                <p className="text-sm font-montserrat font-black text-[#00205B]">Estudiante UC</p>
              </div>
              <div className="w-8 h-8 bg-[#00205B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">UC</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100 shrink-0">
            {['Marketplace','Arriendos','Campus'].map((tab, i) => (
              <button key={tab} className={`flex-1 text-[9px] font-bold py-2 transition-colors
                ${i === 0 ? 'text-[#00205B] border-b-2 border-[#00205B]' : 'text-gray-400'}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Listings */}
          <div className="flex-1 overflow-hidden p-2">
            <p className="text-[9px] font-bold text-gray-700 mb-2">Marketplace <span className="text-[#00205B]">Ver todo →</span></p>
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                { emoji: '👟', price: '$60.000', label: 'Nike AF1', tag: 'Ropa' },
                { emoji: '📱', price: '$380.000', label: 'iPad 10', tag: 'Tech' },
              ].map(item => (
                <div key={item.label} className="bg-gray-50 rounded-xl overflow-hidden">
                  <div className="h-16 flex items-center justify-center text-2xl bg-blue-50">{item.emoji}</div>
                  <div className="p-1.5">
                    <span className="text-[8px] bg-[#00205B] text-white px-1 py-0.5 rounded-full">{item.tag}</span>
                    <p className="text-[9px] font-black text-[#00205B] mt-0.5">{item.price}</p>
                    <p className="text-[8px] text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[9px] font-bold text-gray-700 mb-2">Arriendos <span className="text-[#00205B]">Ver todo →</span></p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { emoji: '🏠', price: '$500k/mes', label: 'Depto República' },
                { emoji: '👗', price: '$15k/semana', label: 'Vestidos' },
              ].map(item => (
                <div key={item.label} className="bg-gray-50 rounded-xl overflow-hidden">
                  <div className="h-16 flex items-center justify-center text-2xl bg-green-50">{item.emoji}</div>
                  <div className="p-1.5">
                    <p className="text-[9px] font-black text-[#00205B]">{item.price}</p>
                    <p className="text-[8px] text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="border-t border-gray-100 flex shrink-0">
            {['🏠','🔍','➕','💬','👤'].map((icon, i) => (
              <button key={i} className={`flex-1 py-2 text-base ${i === 0 ? 'text-[#00205B]' : 'text-gray-300'}`}>
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
