import { useState, useMemo } from 'react'
import { LISTINGS, CATEGORIES } from './data/listings'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryRow from './components/CategoryRow'
import HowItWorks from './components/HowItWorks'
import ListingsSection from './components/ListingsSection'
import ListingModal from './components/ListingModal'
import Footer from './components/Footer'

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

  const handleClear = () => { setSearch(''); setCategory('all') }

  const handleCategorySelect = (cat) => {
    setCategory(cat)
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero searchQuery={search} onSearchChange={setSearch} />

      <CategoryRow
        selected={category}
        onSelect={handleCategorySelect}
        counts={counts}
      />

      <HowItWorks />

      <div id="listings">
        <ListingsSection
          listings={filtered}
          category={category}
          search={search}
          onCardClick={setSelected}
          onClear={handleClear}
        />
      </div>

      <Footer />

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-4 md:hidden z-30">
        <button
          onClick={() => {
            const msg = `Hola! Quiero publicar en Prime Marketplace UC 🛒`
            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
          }}
          className="bg-[#00205B] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#003080] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Publicar
        </button>
      </div>

      {selected && <ListingModal listing={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
