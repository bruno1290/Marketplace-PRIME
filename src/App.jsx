import { useState, useMemo } from 'react'
import { LISTINGS, CATEGORIES } from './data/listings'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
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
      if (cat.id !== 'all') c[cat.id] = LISTINGS.filter(l => l.category === cat.id).length
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

  const handlePublish = () => {
    const msg = `Hola! Quiero publicar algo en el Marketplace de Comercial UC 🛒`
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const categoryLabel = CATEGORIES.find(c => c.id === category)?.label ?? 'Todo'

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Header searchQuery={search} onSearchChange={setSearch} />

      <div className="max-w-7xl mx-auto px-3 py-4 flex gap-4 items-start">

        {/* Sidebar — desktop only */}
        <Sidebar
          selected={category}
          onSelect={setCategory}
          counts={counts}
          onPublish={handlePublish}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0">

          {/* Mobile category chips */}
          <div className="mb-3">
            <CategoryFilter selected={category} onSelect={setCategory} counts={counts} />
          </div>

          {/* Page title */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{categoryLabel}</h1>
              <p className="text-sm text-gray-500">
                {filtered.length} {filtered.length === 1 ? 'publicación' : 'publicaciones'} · Hoy
              </p>
            </div>
            {(search || category !== 'all') && (
              <button
                onClick={() => { setSearch(''); setCategory('all') }}
                className="text-sm text-[#00205B] font-medium hover:underline"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map(listing => (
                <ListingCard key={listing.id} listing={listing} onClick={setSelected} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-5xl mb-4">🔍</span>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Sin resultados</h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Intenta con otra búsqueda o cambia la categoría.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile publish FAB */}
      <div className="fixed bottom-5 right-4 md:hidden z-30">
        <button
          onClick={handlePublish}
          className="flex items-center gap-2 bg-[#00205B] text-white font-bold px-5 py-3 rounded-full shadow-xl hover:bg-[#003080] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Publicar
        </button>
      </div>

      {selected && (
        <ListingModal listing={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
