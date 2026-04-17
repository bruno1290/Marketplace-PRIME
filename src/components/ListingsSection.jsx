import ListingCard from './ListingCard'
import { CATEGORIES } from '../data/listings'

export default function ListingsSection({ listings, category, search, onCardClick, onClear }) {
  const catLabel = CATEGORIES.find(c => c.id === category)?.label ?? 'Todo'

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#00205B]">
              {search ? `Resultados para "${search}"` : catLabel === 'Todo' ? 'Publicaciones recientes' : catLabel}
            </h2>
            <p className="text-sm text-gray-400 mt-0.5">
              {listings.length} {listings.length === 1 ? 'publicación' : 'publicaciones'} disponibles
            </p>
          </div>
          {(search || category !== 'all') && (
            <button onClick={onClear}
              className="text-sm text-[#00205B] font-semibold border border-[#00205B] px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {listings.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {listings.map(listing => (
              <ListingCard key={listing.id} listing={listing} onClick={onCardClick} />
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-700 mb-1">Sin resultados</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Intenta con otra búsqueda o explora otras categorías.
            </p>
            <button onClick={onClear}
              className="mt-4 text-sm text-[#00205B] font-semibold underline underline-offset-2">
              Ver todo
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
