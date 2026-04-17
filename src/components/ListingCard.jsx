const CATEGORY_COLORS = {
  ropa: 'bg-pink-100 text-pink-700',
  tech: 'bg-blue-100 text-blue-700',
  entradas: 'bg-orange-100 text-orange-700',
  suplementos: 'bg-green-100 text-green-700',
  libros: 'bg-amber-100 text-amber-700',
  arriendo: 'bg-cyan-100 text-cyan-700',
  servicios: 'bg-purple-100 text-purple-700',
}

const CATEGORY_LABELS = {
  ropa: '👕 Ropa',
  tech: '📱 Tech',
  entradas: '🎟️ Entradas',
  suplementos: '💪 Suplementos',
  libros: '📚 Libros',
  arriendo: '🏠 Arriendo',
  servicios: '🔧 Servicios',
}

const PLACEHOLDER_COLORS = {
  ropa: 'from-pink-200 to-rose-200',
  tech: 'from-blue-200 to-indigo-200',
  entradas: 'from-orange-200 to-amber-200',
  suplementos: 'from-green-200 to-emerald-200',
  libros: 'from-amber-200 to-yellow-200',
  arriendo: 'from-cyan-200 to-sky-200',
  servicios: 'from-purple-200 to-violet-200',
}

const PLACEHOLDER_EMOJI = {
  ropa: '👕', tech: '📱', entradas: '🎟️',
  suplementos: '💪', libros: '📚', arriendo: '🏠', servicios: '🔧',
}

function formatPrice(price, priceLabel) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${priceLabel ?? ''}`
}

export default function ListingCard({ listing, onClick }) {
  const hasImage = listing.images && listing.images.length > 0
  const catColor = CATEGORY_COLORS[listing.category] ?? 'bg-gray-100 text-gray-600'
  const placeholderGrad = PLACEHOLDER_COLORS[listing.category] ?? 'from-gray-200 to-gray-300'
  const placeholderEmoji = PLACEHOLDER_EMOJI[listing.category] ?? '🛍️'

  return (
    <button
      onClick={() => onClick(listing)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-left w-full border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {hasImage ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${placeholderGrad} flex items-center justify-center`}>
            <span className="text-5xl opacity-60">{placeholderEmoji}</span>
          </div>
        )}
        {listing.featured && (
          <div className="absolute top-2 left-2 bg-violet-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            DESTACADO
          </div>
        )}
        {listing.images && listing.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-md">
            +{listing.images.length - 1}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
            {listing.title}
          </h3>
        </div>

        <p className="text-violet-700 font-bold text-base mb-2">
          {formatPrice(listing.price, listing.priceLabel)}
        </p>

        <div className="flex items-center justify-between gap-1">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${catColor}`}>
            {CATEGORY_LABELS[listing.category]}
          </span>
          {listing.condition && (
            <span className="text-[10px] text-gray-400 truncate">{listing.condition}</span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1 text-gray-400">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="text-[11px] truncate">{listing.seller}</span>
        </div>
      </div>
    </button>
  )
}
