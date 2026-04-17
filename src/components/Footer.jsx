export default function Footer() {
  return (
    <footer className="bg-[#00205B] text-white py-10 px-4 mt-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#00205B] font-black text-xs">UC</span>
              </div>
              <span className="font-black text-xl">Prime Marketplace</span>
            </div>
            <p className="text-blue-200 text-sm max-w-xs">
              El marketplace exclusivo para estudiantes de universidades chilenas.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-blue-200 text-xs uppercase tracking-wider">Marketplace</span>
              <a href="#categorias" className="text-blue-100 hover:text-white transition-colors">Categorías</a>
              <a href="#como-funciona" className="text-blue-100 hover:text-white transition-colors">Cómo funciona</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-blue-200 text-xs uppercase tracking-wider">Universidad</span>
              <span className="text-blue-100">Comercial UC</span>
              <span className="text-blue-100">Campus San Joaquín</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <span>© 2026 Prime Marketplace UC. Hecho con ❤️ por estudiantes.</span>
          <span>Solo para universitarios · 0% comisiones</span>
        </div>
      </div>
    </footer>
  )
}
