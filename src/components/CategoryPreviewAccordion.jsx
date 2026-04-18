import { useState } from 'react'

const categoryPreviews = [
  {
    id: 'entradas',
    title: 'Entradas',
    emoji: '🎟️',
    image: '/images/00000547-PHOTO-2026-04-14-10-54-59.jpg',
  },
  {
    id: 'tech',
    title: 'Tecnología',
    emoji: '📱',
    image: '/images/00000568-PHOTO-2026-04-15-14-04-24.jpg',
  },
  {
    id: 'deporte',
    title: 'Deporte',
    emoji: '💪',
    image: '/images/00000524-PHOTO-2026-04-13-08-36-15.jpg',
  },
  {
    id: 'ropa',
    title: 'Ropa',
    emoji: '👕',
    image: '/images/00000514-PHOTO-2026-04-10-20-52-01.jpg',
  }
]

export default function CategoryPreviewAccordion({ onSelect }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="mb-8">
        <p className="font-montserrat font-black text-[#00205B] text-xs uppercase tracking-[0.2em] mb-3">
          Explora por categoría
        </p>
        <h3 className="font-montserrat font-black text-3xl text-gray-900 mb-2">Categorías Destacadas</h3>
        <p className="text-gray-500 font-medium">Haz clic para ver un ejemplo de lo que puedes encontrar.</p>
      </div>

      <div className="space-y-4">
        {categoryPreviews.map((cat) => {
          const isOpen = openId === cat.id
          return (
            <div 
              key={cat.id} 
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-blue-200 shadow-xl shadow-blue-50/50' : 'border-gray-100 shadow-sm hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => setOpenId(isOpen ? null : cat.id)}
                className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-5">
                  <span className={`text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-[#00205B] text-white' : 'bg-gray-50 group-hover:bg-blue-50'
                  }`}>
                    {cat.emoji}
                  </span>
                  <span className="font-montserrat font-black text-xl text-gray-800">{cat.title}</span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-[#00205B] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex flex-col gap-6">
                  <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100">
                    <img 
                      src={cat.image} 
                      alt={`Ejemplo ${cat.title}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(cat.id);
                      document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#00205B] text-white font-montserrat font-black py-4 rounded-2xl shadow-lg hover:bg-[#003080] transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                  >
                    Ver todas las publicaciones de {cat.title}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
