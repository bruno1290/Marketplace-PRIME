const REVIEWS = [
  {
    text: 'Vendí mi chaqueta TNF en menos de 2 horas. Mucho mejor que Instagram o groupme, todo fue rápido y el comprador era del mismo campus.',
    name: 'Martina V.',
    role: 'Ingeniería UC · 3er año',
    stars: 5,
  },
  {
    text: 'Encontré los apuntes de Finanzas Corporativas nuevos a mitad de precio. Imposible encontrar algo así en Amazon o MercadoLibre con entrega en el campus.',
    name: 'Diego F.',
    role: 'Comercial UC · 2do año',
    stars: 5,
  },
  {
    text: 'Pude vender entradas a Saona que ya no iba a usar. Fue súper fácil coordinar con otro estudiante, sin riesgo a estafas.',
    name: 'Isidora M.',
    role: 'Derecho UC · 4to año',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-montserrat font-black text-[#00205B] text-center text-sm uppercase tracking-widest mb-3">
          Confiado por estudiantes
        </p>
        <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-center text-[#1a1a1a] mb-14">
          Lo que dicen tus compañeros.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <Stars count={r.stars} />
              <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{r.text}"</p>
              <div>
                <p className="font-montserrat font-bold text-[#1a1a1a] text-sm">{r.name}</p>
                <p className="text-xs text-gray-400">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
