const BADGES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Seguro',
    desc: 'Solo entre universitarios verificados. Sin extraños.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instantáneo',
    desc: 'Publica en menos de un minuto. Respuesta inmediata.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Solo Universitarios',
    desc: 'Trade con compañeros, no con extraños.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Simple',
    desc: 'Olvídate de GroupMe o Instagram. Todo en un lugar.',
  },
]

export default function TrustBadges() {
  return (
    <section className="bg-[#00205B] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white text-center mb-4">
          La universidad nunca fue<br />tan fácil.
        </h2>
        <p className="text-blue-200 text-center text-lg mb-14 max-w-xl mx-auto">
          Todo lo que necesitas para comprar, vender y arrendar — dentro de tu campus.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BADGES.map(b => (
            <div key={b.title} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-white flex justify-center mb-4">{b.icon}</div>
              <h3 className="font-montserrat font-black text-white text-lg mb-2">{b.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
