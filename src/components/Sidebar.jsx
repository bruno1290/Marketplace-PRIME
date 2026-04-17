import { CATEGORIES } from '../data/listings'

const CATEGORY_ICONS = {
  all: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  ropa: <span className="text-lg">👕</span>,
  tech: <span className="text-lg">📱</span>,
  entradas: <span className="text-lg">🎟️</span>,
  suplementos: <span className="text-lg">💪</span>,
  libros: <span className="text-lg">📚</span>,
  arriendo: <span className="text-lg">🏠</span>,
  servicios: <span className="text-lg">🔧</span>,
}

export default function Sidebar({ selected, onSelect, counts, onPublish }) {
  return (
    <aside className="w-72 shrink-0 hidden md:block">
      <div className="sticky top-16 bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-100">
          <h2 className="font-bold text-lg text-[#00205B]">Marketplace UC</h2>
          <p className="text-xs text-gray-500 mt-0.5">Campus San Joaquín · Comercial UC</p>
        </div>

        {/* Publish button */}
        <div className="px-3 py-3 border-b border-gray-100">
          <button
            onClick={onPublish}
            className="w-full flex items-center justify-center gap-2 bg-[#00205B] hover:bg-[#003080] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Crear publicación
          </button>
        </div>

        {/* Categories */}
        <div className="px-2 py-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">Categorías</p>
          {CATEGORIES.map(cat => {
            const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
            const active = selected === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left
                  ${active
                    ? 'bg-[#E7F0FF] text-[#00205B]'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0
                  ${active ? 'bg-[#00205B] text-white' : 'bg-gray-100'}`}>
                  {CATEGORY_ICONS[cat.id]}
                </span>
                <span className="flex-1">{cat.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold
                  ${active ? 'bg-[#00205B] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-100">
          <p className="text-[10px] text-gray-400 leading-relaxed">
            Marketplace exclusivo para estudiantes de la Pontificia Universidad Católica de Chile.
          </p>
        </div>
      </div>
    </aside>
  )
}
