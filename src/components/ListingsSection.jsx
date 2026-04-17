import ListingCard from './ListingCard'
import { CATEGORIES } from '../data/listings'

export default function ListingsSection({ listings, category, search, onCardClick, onClear, onSelect, counts }) {
  const catLabel = CATEGORIES.find(c => c.id === category)?.label ?? 'Todo'

  return (
    <section id="listings" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.2em] mb-3">
          Publicaciones recientes
        </p>

        {/* Title row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-montserrat font-black text-[#111] leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              {search ? `Resultados: "${search}"` : catLabel === 'Todo' ? 'Últimas publicaciones' : catLabel}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{listings.length} publicaciones disponibles hoy</p>
          </div>
          {(search || category !== 'all') && (
            <button onClick={onClear}
              className="text-sm font-montserrat font-bold text-[#00205B] border border-[#00205B] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Ver todo
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {CATEGORIES.map(cat => {
            const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
            const active = category === cat.id
            return (
              <button key={cat.id} onClick={() => onSelect(cat.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all border"
                style={{
                  backgroundColor: active ? '#00205B' : '#fff',
                  color: active ? '#fff' : '#6b7280',
                  borderColor: active ? '#00205B' : '#e5e7eb',
                }}>
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span style={{ opacity: 0.7, fontSize: '11px', fontWeight: 700 }}>{count}</span>
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
          <div className="py-24 flex flex-col items-center text-center bg-gray-50 rounded-3xl">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🔍</div>
            <h3 className="font-montserrat font-black text-xl text-gray-700 mb-2">Sin resultados</h3>
            <p className="text-gray-400 text-sm max-w-xs mb-4">Intenta con otra búsqueda o categoría.</p>
            <button onClick={onClear} className="text-sm font-bold text-[#00205B] underline underline-offset-2">
              Ver todo
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
