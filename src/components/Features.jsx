function FeatureSection({ tag, title, desc, bullets, visual, reverse, dark }) {
  return (
    <section className={`py-24 px-8 ${dark ? 'bg-gray-50' : 'bg-white'}`}>
      <div className={`max-w-5xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}>
        {/* Text */}
        <div className="flex-1">
          <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.2em] mb-4">{tag}</p>
          <h2 className="font-montserrat font-black leading-tight mb-5 text-[#111]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{desc}</p>
          <ul className="space-y-4">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#00205B] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xs aspect-square rounded-3xl flex items-center justify-center text-[7rem]"
            style={{ backgroundColor: '#00205B10' }}>
            {visual}
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
        desc="Snap una foto, sube el precio y listo. Tu publicación llega al instante a todos los estudiantes de tu universidad."
        bullets={[
          'Setup rápido — sin verificaciones complicadas',
          'Vende en tu campus o coordina con otras universidades',
          'Intercambia con estudiantes como tú, no con extraños',
        ]}
        visual="📸"
      />
      <FeatureSection
        tag="Arriendos"
        title="Arrienda entre estudiantes."
        desc="¿No quieres vender? Arrienda ropa, equipos o departamentos directamente a estudiantes de tu campus."
        bullets={[
          'Gana lucas con lo que ya tienes',
          'Garantía entre universitarios de la misma U',
          'Encuentra un depto a pasos de tu campus',
        ]}
        visual="🏠"
        reverse
        dark
      />
      <FeatureSection
        tag="Entradas y eventos"
        title="Entradas a precio de estudiante."
        desc="Compra y vende entradas para eventos universitarios. Sin intermediarios, sin estafas — todo entre estudiantes verificados."
        bullets={[
          'Fiestas, conciertos y eventos UC al costo',
          'Precios reales entre compañeros de campus',
          'Coordinación directa — sin comisiones',
        ]}
        visual="🎟️"
      />
    </>
  )
}
