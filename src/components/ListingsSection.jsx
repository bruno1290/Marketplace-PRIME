import ListingCard from './ListingCard'
import { CATEGORIES } from '../data/listings'

export default function ListingsSection({ listings, category, search, onCardClick, onClear, onSelect, counts }) {
  const catLabel = CATEGORIES.find(c => c.id === category)?.label ?? 'Todo'

  return (
    <section id="listings" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-widest mb-1">
              Publicaciones recientes
            </p>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#1a1a1a]">
              {search ? `"${search}"` : catLabel}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{listings.length} publicaciones disponibles hoy</p>
          </div>
          {(search || category !== 'all') && (
            <button onClick={onClear}
              className="text-sm font-semibold text-[#00205B] border border-[#00205B] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors self-start sm:self-auto">
              Ver todo
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 pb-1">
          {CATEGORIES.map(cat => {
            const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
            const active = category === cat.id
            return (
              <button key={cat.id} onClick={() => onSelect(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all
                  ${active
                    ? 'bg-[#00205B] text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#00205B] hover:text-[#00205B]'
                  }`}>
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span className={`text-xs font-bold ${active ? 'text-white/70' : 'text-gray-400'}`}>{count}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {listings.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {listings.map(l => (
              <ListingCard key={l.id} listing={l} onClick={onCardClick} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl py-20 flex flex-col items-center text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-montserrat font-black text-xl text-gray-700 mb-2">Sin resultados</h3>
            <p className="text-gray-400 text-sm max-w-xs">Intenta con otra búsqueda o categoría.</p>
            <button onClick={onClear} className="mt-4 text-[#00205B] font-bold text-sm underline underline-offset-2">
              Ver todo
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
