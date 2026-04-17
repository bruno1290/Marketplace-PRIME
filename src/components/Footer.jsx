export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <p className="font-montserrat font-black text-3xl text-white mb-1">prime</p>
            <p className="text-gray-500 text-sm max-w-xs">
              Compra, vende y arrienda.<br/>El marketplace exclusivo para universitarios chilenos.
            </p>
          </div>
          <div className="flex gap-12 text-sm text-gray-400">
            <div className="flex flex-col gap-2.5">
              <span className="font-montserrat font-black text-white text-xs uppercase tracking-wider">Plataforma</span>
              <a href="#listings" className="hover:text-white transition-colors">Ver publicaciones</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
              <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-montserrat font-black text-white text-xs uppercase tracking-wider">Universidad</span>
              <span>Comercial UC</span>
              <span>Campus San Joaquín</span>
              <span>Santiago, Chile</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© 2026 Prime Marketplace · Hecho por y para universitarios chilenos.</span>
          <span>0% comisiones · Solo universitarios</span>
        </div>
      </div>
    </footer>
  )
}
