function FeatureSection({ tag, title, desc, bullets, emoji, reverse, bg }) {
  return (
    <section className={`py-20 px-6 ${bg ?? 'bg-white'}`}>
      <div className={`max-w-5xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        {/* Text */}
        <div className="flex-1">
          <span className="inline-block bg-[#00205B]/10 text-[#00205B] text-xs font-montserrat font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-[#1a1a1a] leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">{desc}</p>
          <ul className="space-y-3">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00205B] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-[#00205B]/5 flex items-center justify-center text-9xl shadow-inner">
            {emoji}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Features() {
  return (
    <>
      <FeatureSection
        tag="Compra y venta"
        title="Publicar es cosa de segundos."
        desc="Sube fotos, escribe el precio y listo. Tu publicación llega a todos los universitarios de tu campus al instante."
        bullets={[
          'Sin registro complicado — solo universitarios',
          'Vende localmente o coordina entrega en el campus',
          'Intercambia con estudiantes como tú',
        ]}
        emoji="📸"
        bg="bg-white"
      />

      <FeatureSection
        tag="Arriendos"
        title="Arrienda entre estudiantes."
        desc="¿No quieres vender? Arrienda ropa, equipos o espacios directamente a un estudiante de tu campus."
        bullets={[
          'Gana plata con lo que ya tienes',
          'Garantía entre estudiantes de la misma U',
          'Encuentra lo que necesitas sin gastar de más',
        ]}
        emoji="🏠"
        reverse
        bg="bg-gray-50"
      />

      <FeatureSection
        tag="Entradas"
        title="El único lugar para entradas a precio de estudiante."
        desc="Compra y vende entradas para eventos universitarios. Sin intermediarios, sin estafas — todo entre estudiantes verificados."
        bullets={[
          'Entradas para fiestas, conciertos y eventos UC',
          'Precios reales entre compañeros',
          'Coordinación directa por WhatsApp',
        ]}
        emoji="🎟️"
        bg="bg-white"
      />
    </>
  )
}
