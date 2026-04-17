export default function Header({ onSearch }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-[#00205B] rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-sm">UC</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-black text-[#00205B] text-lg tracking-tight">Prime</span>
            <span className="text-gray-400 text-sm ml-1">Marketplace</span>
          </div>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <a href="#como-funciona" className="hover:text-[#00205B] transition-colors">Cómo funciona</a>
          <a href="#categorias" className="hover:text-[#00205B] transition-colors">Categorías</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              const msg = `Hola! Quiero publicar algo en Prime Marketplace UC 🛒`
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
            }}
            className="bg-[#00205B] hover:bg-[#003080] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            + Publicar
          </button>
        </div>
      </div>
    </header>
  )
}
