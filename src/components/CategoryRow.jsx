import { CATEGORIES } from '../data/listings'

const CAT_ICONS = {
  all:         { emoji: '🛍️', bg: '#EEF2FF', color: '#4338CA' },
  ropa:        { emoji: '👕', bg: '#FEE2E2', color: '#DC2626' },
  tech:        { emoji: '📱', bg: '#DBEAFE', color: '#1D4ED8' },
  entradas:    { emoji: '🎟️', bg: '#FEF3C7', color: '#D97706' },
  suplementos: { emoji: '💪', bg: '#D1FAE5', color: '#059669' },
  libros:      { emoji: '📚', bg: '#FEF9C3', color: '#CA8A04' },
  arriendo:    { emoji: '🏠', bg: '#E0F2FE', color: '#0284C7' },
  servicios:   { emoji: '🔧', bg: '#F3E8FF', color: '#7C3AED' },
}

export default function CategoryRow({ selected, onSelect, counts }) {
  return (
    <section id="categorias" className="bg-white border-t border-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Explorar por categoría
        </h2>
        <div className="flex gap-4 sm:gap-6 justify-start sm:justify-center overflow-x-auto scrollbar-hide pb-1">
          {CATEGORIES.map(cat => {
            const icon = CAT_ICONS[cat.id] ?? { emoji: '🛍️', bg: '#F3F4F6', color: '#374151' }
            const active = selected === cat.id
            const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className="flex flex-col items-center gap-2 shrink-0 group"
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-sm"
                  style={{
                    backgroundColor: active ? icon.color : icon.bg,
                    transform: active ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: active ? `0 4px 14px ${icon.color}40` : undefined,
                  }}
                >
                  {icon.emoji}
                </div>
                <span className={`text-xs font-semibold transition-colors ${active ? 'text-[#00205B]' : 'text-gray-500 group-hover:text-gray-800'}`}>
                  {cat.label}
                </span>
                <span className="text-[10px] text-gray-300 font-medium -mt-1">{count}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
