const REVIEWS = [
  {
    quote: 'Vendí mi chaqueta TNF en menos de 2 horas. Mucho mejor que Instagram o el group de WhatsApp — todo fue rápido y el comprador era del mismo campus.',
    name: 'Martina V.',
    role: 'Ingeniería Comercial UC · 3er año',
  },
  {
    quote: 'Encontré los apuntes de Finanzas Corporativas nuevos a mitad de precio. Imposible encontrar eso en Amazon con entrega en San Joaquín.',
    name: 'Diego F.',
    role: 'Economía UC · 2do año',
  },
  {
    quote: 'Pude vender entradas a Saona que ya no iba a usar. Fue súper fácil coordinar con otro estudiante, sin riesgo a estafas.',
    name: 'Isidora M.',
    role: 'Derecho UC · 4to año',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.2em] mb-3">
            Confiado por estudiantes
          </p>
          <h2 className="font-montserrat font-black text-[#111] leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Lo que dicen tus compañeros.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="flex flex-col justify-between p-7 rounded-2xl border border-gray-100 bg-gray-50">
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">"{r.quote}"</p>
              </div>
              <div>
                <p className="font-montserrat font-bold text-[#111] text-sm">{r.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
