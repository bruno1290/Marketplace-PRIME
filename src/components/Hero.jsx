export default function Hero({ searchQuery, onSearchChange }) {
  return (
    <section className="bg-white pt-12 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#00205B] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#00205B] rounded-full animate-pulse" />
          Exclusivo para universidades chilenas
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#00205B] leading-tight tracking-tight mb-4">
          Compra y vende<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #00205B 0%, #1D4ED8 100%)' }}>
            entre estudiantes
          </span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          El marketplace hecho para universitarios chilenos. Ropa, tech, apuntes, arriendos y mucho más — todo a walking distance.
        </p>

        {/* Search bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar productos, ropa, tech..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-6 py-4 text-base bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#00205B] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12">
          {[
            { value: '19+', label: 'Publicaciones activas' },
            { value: '7', label: 'Categorías' },
            { value: '100%', label: 'Universitarios' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#00205B]">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
