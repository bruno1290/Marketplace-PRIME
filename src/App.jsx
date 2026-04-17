import { useState, useMemo } from 'react'
import { LISTINGS, CATEGORIES } from './data/listings'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ListingCard from './components/ListingCard'
import ListingModal from './components/ListingModal'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const counts = useMemo(() => {
    const c = { all: LISTINGS.length }
    CATEGORIES.forEach(cat => {
      if (cat.id !== 'all') {
        c[cat.id] = LISTINGS.filter(l => l.category === cat.id).length
      }
    })
    return c
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return LISTINGS.filter(l => {
      const matchCat = category === 'all' || l.category === category
      const matchSearch = !q ||
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.seller.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div className="min-h-screen bg-[#F5F4FF]">
      <Header searchQuery={search} onSearchChange={setSearch} />
      <Hero />

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Category filter */}
        <div className="py-4">
          <CategoryFilter selected={category} onSelect={setCategory} counts={counts} />
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            {filtered.length === 0
              ? 'Sin resultados'
              : `${filtered.length} ${filtered.length === 1 ? 'publicación' : 'publicaciones'}`}
          </p>
          {(search || category !== 'all') && (
            <button
              onClick={() => { setSearch(''); setCategory('all') }}
              className="text-xs text-violet-600 font-medium hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map(listing => (
              <ListingCard key={listing.id} listing={listing} onClick={setSelected} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-6xl mb-4">🔍</span>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No encontramos nada</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Intenta con otra búsqueda o cambia la categoría.
            </p>
          </div>
        )}
      </main>

      {/* Floating publish button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-30">
        <button
          onClick={() => {
            const msg = `Hola! Quiero publicar algo en el marketplace de Comercial UC 🛒`
            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-5 py-3.5 rounded-2xl shadow-xl shadow-violet-300 hover:shadow-2xl hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          <span>Publicar</span>
        </button>
      </div>

      {selected && (
        <ListingModal listing={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
