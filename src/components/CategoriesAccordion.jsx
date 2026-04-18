import { useState } from 'react'

const categories = [
  {
    id: 'arriendo',
    title: 'Arriendo',
    emoji: '🏠',
    description: 'Encuentra departamentos, piezas y casas cerca de tu campus. Todo publicado por otros estudiantes o arrendadores verificados que buscan universitarios. Olvídate de los estafadores y las altas comisiones de los corredores tradicionales.'
  },
  {
    id: 'entrada',
    title: 'Entradas',
    emoji: '🎟️',
    description: '¿Te quedaste sin entrada para la fiesta de tu carrera? Aquí puedes comprar y vender entradas para los mejores eventos universitarios, fiestas, fondas y paseos de forma segura entre estudiantes.'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    emoji: '📱',
    description: 'Compra y vende iPads, calculadoras científicas, audífonos, computadores y todo lo que necesitas para estudiar. Consigue precios justos de estudiante a estudiante y asegura tus entregas en el mismo campus.'
  },
  {
    id: 'ropa',
    title: 'Ropa',
    emoji: '👕',
    description: 'Renueva tu clóset vendiendo lo que ya no usas y comprando ropa vintage, polerones de carrera o simplemente prendas de segunda mano a otros estudiantes de tu misma universidad.'
  }
]

export default function CategoriesAccordion() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="py-24 px-8 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.2em] mb-3">
            Explora las categorías
          </p>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-gray-900 mb-4">
            ¿Qué puedes encontrar en MarketSafe?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Nuestra comunidad intercambia desde calculadoras hasta arriendos de departamentos. Haz clic para descubrir cómo funciona cada categoría.
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((cat) => {
            const isOpen = openId === cat.id
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-200 shadow-md shadow-blue-50' : 'border-gray-200 shadow-sm hover:border-gray-300'
                  }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#00205B] text-white' : 'bg-gray-50 group-hover:bg-blue-50'
                      }`}>
                      {cat.emoji}
                    </span>
                    <span className="font-montserrat font-black text-xl text-gray-800">{cat.title}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00205B] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-600 leading-relaxed px-6 pb-6 sm:px-8 sm:pb-8 sm:pl-[5.5rem]">
                    {cat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
