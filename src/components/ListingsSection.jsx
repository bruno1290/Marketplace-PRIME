import ListingCard from './ListingCard'
import { CATEGORIES } from '../data/listings'

export default function ListingsSection({ listings, category, search, onCardClick, onClear }) {
  const catLabel = CATEGORIES.find(c => c.id === category)?.label ?? 'Todo'

  return (
    <section id="listings" className="bg-gray-50 py-16 px-4 sm:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Minimal Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-montserrat font-black text-3xl text-gray-900 mb-2">
              {search ? `Resultados: "${search}"` : category !== 'all' ? catLabel : 'Catálogo Completo'}
            </h2>
            <p className="text-gray-400 font-medium">
              {listings.length} {listings.length === 1 ? 'publicación encontrada' : 'publicaciones disponibles'}
            </p>
          </div>
          
          {(search || category !== 'all') && (
             <button onClick={onClear}
                className="text-sm font-montserrat font-bold text-[#00205B] flex items-center gap-2 hover:underline">
                <span>✕</span> Limpiar filtros
              </button>
          )}
        </div>

        {/* Product Grid */}
        {listings.length === 0 ? (
          <div className="py-24 flex flex-col items-center text-center bg-white rounded-[2rem] shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">🔍</div>
            <h3 className="font-montserrat font-black text-2xl text-gray-800 mb-3">No hay resultados</h3>
            <p className="text-gray-500 font-medium max-w-sm mb-6">Prueba ajustando los filtros o el buscador en la parte superior.</p>
            <button onClick={onClear} className="font-montserrat font-bold text-[#00205B] border-2 border-[#00205B] px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {listings.map(l => (
              <ListingCard key={l.id} listing={l} onClick={onCardClick} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
