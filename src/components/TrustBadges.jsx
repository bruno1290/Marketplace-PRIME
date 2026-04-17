const BADGES = [
  { icon: '🔒', title: 'Seguro', desc: 'Solo universitarios. Sin extraños, sin riesgo.' },
  { icon: '⚡', title: 'Instantáneo', desc: 'Publica en menos de un minuto. Respuesta al tiro.' },
  { icon: '✅', title: 'Solo Universitarios', desc: 'Trade con compañeros de campus, no con desconocidos.' },
  { icon: '🤝', title: 'Simple', desc: 'Olvídate del GroupMe o Instagram. Todo en un solo lugar.' },
]

export default function TrustBadges() {
  return (
    <section className="bg-[#00205B] py-24 px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="font-montserrat font-black text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          La universidad nunca<br />fue tan fácil.
        </h2>
        <p className="text-blue-200 text-lg max-w-lg mx-auto">
          Todo lo que necesitas para comprar, vender y arrendar — dentro de tu campus, sin complicaciones.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {BADGES.map(b => (
          <div key={b.title}
            className="rounded-2xl p-6 text-center border border-white/10 hover:bg-white/5 transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            <div className="text-3xl mb-3">{b.icon}</div>
            <h3 className="font-montserrat font-black text-white text-base mb-2">{b.title}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
