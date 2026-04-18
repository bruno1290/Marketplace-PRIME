export default function Header({ 
  onPublish, 
  search, 
  onSearchChange, 
  category, 
  onCategoryChange, 
  categories = [], 
  faculty, 
  onFacultyChange, 
  faculties = [],
  showFilters = false 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 border-b border-gray-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex flex-col leading-none shrink-0">
          <span className="font-montserrat font-black text-2xl text-[#00205B] tracking-tight">MarketSafe</span>
          <span className="text-[10px] font-semibold text-gray-400 tracking-wide -mt-0.5">Marketplace Universitario</span>
        </a>

        {/* E-commerce Filters (Only in Marketplace) */}
        {showFilters && (
          <div className="hidden lg:flex flex-1 items-center gap-3 px-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Busca productos..."
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B]/10 focus:border-[#00205B] transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl py-2.5 px-4 font-montserrat font-bold focus:outline-none focus:ring-2 focus:ring-[#00205B]/10 transition-all cursor-pointer hover:bg-gray-100"
            >
              <option value="all">Todas las categorías</option>
              {categories.filter(c => c.id !== 'all').map(cat => (
                <option key={cat.id} value={cat.id}>{cat.emoji} {cat.label}</option>
              ))}
            </select>

            {/* Faculty Dropdown */}
            <select
              value={faculty}
              onChange={(e) => onFacultyChange(e.target.value)}
              className="bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl py-2.5 px-4 font-montserrat font-bold focus:outline-none focus:ring-2 focus:ring-[#00205B]/10 transition-all cursor-pointer hover:bg-gray-100"
            >
              <option value="all">Todas las facultades</option>
              {faculties.filter(f => f.id !== 'all').map(fac => (
                <option key={fac.id} value={fac.id}>{fac.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button onClick={onPublish}
            className="font-montserrat font-bold text-sm px-6 py-3 rounded-xl text-white transition-all shadow-lg hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#00205B' }}>
            Vender ahora
          </button>
        </div>
      </div>
      
      {/* Mobile Search/Filters (Visible only on mobile if showFilters is true) */}
      {showFilters && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-2">
          <div className="relative">
             <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar..."
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm font-medium focus:outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
          </div>
          <div className="flex gap-2">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-100 text-[12px] rounded-lg py-2 px-2 font-bold"
            >
              <option value="all">Categorías</option>
              {categories.filter(c => c.id !== 'all').map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
            <select
              value={faculty}
              onChange={(e) => onFacultyChange(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-100 text-[12px] rounded-lg py-2 px-2 font-bold"
            >
              <option value="all">Facultades</option>
              {faculties.filter(f => f.id !== 'all').map(fac => (
                <option key={fac.id} value={fac.id}>{fac.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  )
}
