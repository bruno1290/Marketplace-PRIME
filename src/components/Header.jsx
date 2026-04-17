export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="sticky top-0 z-40 bg-[#00205B] shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">

        {/* Logo UC */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-[#00205B] font-black text-xs leading-none">UC</span>
          </div>
          <div className="hidden sm:block border-l border-white/30 pl-2.5">
            <p className="text-white font-bold text-sm leading-tight">Marketplace</p>
            <p className="text-blue-200 text-[11px] leading-tight">Comercial UC</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar en Marketplace..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Campus */}
        <div className="hidden md:flex items-center gap-1.5 shrink-0">
          <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-blue-100 text-sm">San Joaquín</span>
        </div>
      </div>
    </header>
  )
}
