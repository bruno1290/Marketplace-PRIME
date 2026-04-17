export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow">
            <span className="text-white text-sm font-bold">UC</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-violet-700 leading-none">Marketplace</p>
            <p className="text-[10px] text-gray-400 leading-none">Comercial UC</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 rounded-xl border border-transparent focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
          />
        </div>

        {/* Campus badge */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0 bg-violet-50 rounded-xl px-3 py-1.5">
          <span className="text-xs">📍</span>
          <span className="text-xs font-medium text-violet-700">San Joaquín</span>
        </div>
      </div>
    </header>
  )
}
