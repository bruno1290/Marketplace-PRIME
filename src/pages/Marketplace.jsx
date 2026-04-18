import { useState, useMemo } from 'react'
import { LISTINGS, CATEGORIES, FACULTIES } from '../data/listings'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ListingsSection from '../components/ListingsSection'
import ListingModal from '../components/ListingModal'
import Footer from '../components/Footer'

export default function Marketplace() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [faculty, setFaculty] = useState('all')
  const [selected, setSelected] = useState(null)

  const counts = useMemo(() => {
    const c = { all: LISTINGS.length }
    CATEGORIES.forEach(cat => {
      if (cat.id !== 'all') {
        c[cat.id] = LISTINGS.filter(l => l.category === cat.id && (faculty === 'all' || l.faculty === faculty)).length
      }
    })
    return c
  }, [faculty])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return LISTINGS.filter(l => {
      const matchCat = category === 'all' || l.category === category
      const matchFac = faculty === 'all' || l.faculty === faculty
      const matchSearch = !q ||
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.seller.toLowerCase().includes(q)
      return matchCat && matchFac && matchSearch
    })
  }, [search, category, faculty])

  const handlePublish = () => {
    const msg = `Hola! Quiero publicar algo en MarketSafe PUC 🛒`
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleExplore = () => {
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onPublish={handlePublish} 
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={CATEGORIES}
        faculty={faculty}
        onFacultyChange={setFaculty}
        faculties={FACULTIES}
        showFilters={true}
      />
      
      <Hero onPublish={handlePublish} onExplore={handleExplore} />
      
      <ListingsSection
        listings={filtered}
        category={category}
        faculty={faculty}
        search={search}
        onCardClick={setSelected}
        onClear={() => { setSearch(''); setCategory('all'); setFaculty('all') }}
        onSelect={setCategory}
        onSelectFaculty={setFaculty}
        counts={counts}
      />
      
      <Footer />

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-4 md:hidden z-30">
        <button onClick={handlePublish}
          className="bg-[#00205B] text-white font-montserrat font-bold px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#003080] transition-colors">
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
