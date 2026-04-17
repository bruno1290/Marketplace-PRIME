export default function Header({ onPublish }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-montserrat font-black text-2xl text-[#00205B] tracking-tight">prime</span>
          <span className="text-[10px] font-semibold text-gray-400 tracking-wide -mt-0.5">Marketplace Universitario</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Características', href: '#features' },
            { label: 'Testimonios', href: '#testimonios' },
            { label: 'Ver publicaciones', href: '#listings' },
          ].map(link => (
            <a key={link.href} href={link.href}
              className="text-sm font-semibold text-gray-500 hover:text-[#00205B] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button onClick={onPublish}
          className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-lg text-white transition-colors"
          style={{ backgroundColor: '#00205B' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#003080'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00205B'}>
          Publicar
        </button>
      </div>
    </header>
  )
}
