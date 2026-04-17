export default function Hero({ onPublish, onExplore }) {
  return (
    <section className="flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 64px)' }}>

      {/* Left — text content */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 xl:px-20 py-20 lg:py-0">
        <p className="text-xs font-montserrat font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
          Creado por y para universitarios
        </p>
        <h1 className="font-montserrat font-black leading-[0.95] mb-7"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#00205B' }}>
          Marketplace<br />para<br />Universidades<br />Chilenas
        </h1>
        <p className="text-gray-500 leading-relaxed mb-10 max-w-md"
          style={{ fontSize: '1.125rem' }}>
          La primera plataforma de compra, venta y arriendo diseñada exclusivamente para estudiantes universitarios — construida para tu campus.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onExplore}
            className="font-montserrat font-bold text-sm px-8 py-4 rounded-lg transition-colors"
            style={{ backgroundColor: '#111', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#111'}
          >
            Ver publicaciones
          </button>
          <button
            onClick={onPublish}
            className="font-montserrat font-bold text-sm px-8 py-4 rounded-lg border-2 transition-colors"
            style={{ borderColor: '#111', color: '#111', backgroundColor: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111' }}
          >
            Publicar gratis
          </button>
        </div>
      </div>

      {/* Right — UC navy panel with CSS phone mockup */}
      <div className="lg:w-[52%] flex-shrink-0 bg-[#00205B] flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: '60vw', maxHeight: '100vh' }}>

        {/* Floating background icons */}
        {[
          { icon: '📱', top: '8%',  left: '8%',  rot: '-12deg', size: '3.5rem', opacity: 0.12 },
          { icon: '👕', top: '18%', left: '72%', rot: '15deg',  size: '3rem',   opacity: 0.10 },
          { icon: '📚', top: '65%', left: '6%',  rot: '-8deg',  size: '2.8rem', opacity: 0.10 },
          { icon: '🎟️', top: '72%', left: '68%', rot: '18deg',  size: '3rem',   opacity: 0.12 },
          { icon: '💪', top: '40%', left: '82%', rot: '-5deg',  size: '2.5rem', opacity: 0.08 },
          { icon: '🏠', top: '48%', left: '4%',  rot: '10deg',  size: '2.8rem', opacity: 0.09 },
          { icon: '🎓', top: '88%', left: '35%', rot: '-15deg', size: '3rem',   opacity: 0.08 },
        ].map((item, i) => (
          <span key={i} className="absolute select-none pointer-events-none"
            style={{
              top: item.top, left: item.left,
              fontSize: item.size,
              opacity: item.opacity,
              transform: `rotate(${item.rot})`,
            }}>
            {item.icon}
          </span>
        ))}

        {/* Phone mockup */}
        <div className="relative z-10 my-12 lg:my-0"
          style={{
            width: '260px',
            height: '530px',
            backgroundColor: '#ffffff',
            borderRadius: '38px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 0 8px rgba(255,255,255,0.08)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>

          {/* Status bar */}
          <div style={{ height: '28px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ width: '80px', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '999px' }} />
          </div>

          {/* App header */}
          <div style={{ padding: '8px 14px 6px', borderBottom: '1px solid #f3f4f6', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '9px', color: '#9ca3af', fontWeight: 600, marginBottom: '1px' }}>Hola 👋</p>
                <p style={{ fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#00205B' }}>Estudiante UC</p>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#00205B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '10px', fontWeight: 900 }}>UC</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6', flexShrink: 0 }}>
            {[
              { label: 'Marketplace', active: true },
              { label: 'Arriendos', active: false },
              { label: 'Campus', active: false },
            ].map(tab => (
              <div key={tab.label} style={{
                flex: 1, padding: '8px 4px', textAlign: 'center',
                fontSize: '8.5px', fontWeight: 700,
                color: tab.active ? '#00205B' : '#9ca3af',
                borderBottom: tab.active ? '2px solid #00205B' : '2px solid transparent',
              }}>
                {tab.label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: 'hidden', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#111' }}>Marketplace</span>
              <span style={{ fontSize: '8px', color: '#00205B', fontWeight: 600 }}>Ver todo →</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
              {[
                { bg: '#EFF6FF', emoji: '👟', price: '$60.000', name: 'Nike AF1 Blancas', tag: 'Ropa' },
                { bg: '#F0FDF4', emoji: '📱', price: '$380.000', name: 'iPad 10 + Pencil', tag: 'Tech' },
              ].map(item => (
                <div key={item.name} style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #f3f4f6' }}>
                  <div style={{ height: '64px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                    {item.emoji}
                  </div>
                  <div style={{ padding: '5px 6px' }}>
                    <span style={{ fontSize: '7px', backgroundColor: '#00205B', color: '#fff', padding: '1px 5px', borderRadius: '999px', fontWeight: 700 }}>{item.tag}</span>
                    <p style={{ fontSize: '9px', fontWeight: 900, color: '#00205B', marginTop: '3px', fontFamily: 'Montserrat,sans-serif' }}>{item.price}</p>
                    <p style={{ fontSize: '7.5px', color: '#6b7280', marginTop: '1px' }}>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#111' }}>Arriendos</span>
              <span style={{ fontSize: '8px', color: '#00205B', fontWeight: 600 }}>Ver todo →</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { bg: '#F0FDF4', emoji: '🏠', price: '$500k/mes', name: 'Depto República' },
                { bg: '#FEF9C3', emoji: '📚', price: '$55.000', name: 'Libro Finanzas' },
              ].map(item => (
                <div key={item.name} style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #f3f4f6' }}>
                  <div style={{ height: '64px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                    {item.emoji}
                  </div>
                  <div style={{ padding: '5px 6px' }}>
                    <p style={{ fontSize: '9px', fontWeight: 900, color: '#00205B', fontFamily: 'Montserrat,sans-serif' }}>{item.price}</p>
                    <p style={{ fontSize: '7.5px', color: '#6b7280', marginTop: '1px' }}>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div style={{ borderTop: '1px solid #f3f4f6', display: 'flex', flexShrink: 0 }}>
            {[
              { icon: '⊞', active: true },
              { icon: '⌕', active: false },
              { icon: '⊕', active: false },
              { icon: '✉', active: false },
              { icon: '◎', active: false },
            ].map((btn, i) => (
              <button key={i} style={{
                flex: 1, padding: '10px 0', fontSize: '16px',
                color: btn.active ? '#00205B' : '#d1d5db',
                background: 'none', border: 'none', cursor: 'pointer',
              }}>
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
