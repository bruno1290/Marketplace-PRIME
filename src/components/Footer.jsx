export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a' }} className="text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <p className="font-montserrat font-black text-3xl text-white mb-2">prime</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Compra, vende y arrienda.<br />
              El marketplace exclusivo creado por y para universitarios chilenos.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-1">Plataforma</p>
              <a href="#listings" className="text-gray-500 hover:text-white transition-colors">Ver publicaciones</a>
              <a href="#features" className="text-gray-500 hover:text-white transition-colors">Características</a>
              <a href="#testimonios" className="text-gray-500 hover:text-white transition-colors">Testimonios</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-1">Contacto</p>
              <span className="text-gray-500">Comercial UC</span>
              <span className="text-gray-500">Campus San Joaquín</span>
              <span className="text-gray-500">Santiago, Chile</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-gray-600 text-xs">© 2026 Prime Marketplace · Creado por y para universitarios chilenos.</p>
          <p className="text-gray-600 text-xs">0% comisiones · Solo universitarios</p>
        </div>
      </div>
    </footer>
  )
}
