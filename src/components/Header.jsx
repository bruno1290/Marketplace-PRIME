export default function Header({ onPublish }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-montserrat font-black text-2xl text-[#00205B]">prime</span>
          <span className="text-xs font-semibold text-gray-400 leading-tight hidden sm:block">
            Marketplace<br/>Universitario
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#como-funciona" className="hover:text-[#00205B] transition-colors">Características</a>
          <a href="#testimonios" className="hover:text-[#00205B] transition-colors">Testimonios</a>
          <a href="#listings" className="hover:text-[#00205B] transition-colors">Ver todo</a>
        </nav>

        <button onClick={onPublish}
          className="bg-[#00205B] hover:bg-[#003080] text-white font-montserrat font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
          Publicar
        </button>
      </div>
    </header>
  )
}
