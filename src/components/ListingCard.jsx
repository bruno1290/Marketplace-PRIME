const PLACEHOLDER_EMOJI = {
  ropa: '👕', tech: '📱', entradas: '🎟️',
  suplementos: '💪', libros: '📚', arriendo: '🏠', servicios: '🔧',
}

const PLACEHOLDER_BG = {
  ropa: '#FEE2E2',
  tech: '#DBEAFE',
  entradas: '#FEF3C7',
  suplementos: '#D1FAE5',
  libros: '#FEF9C3',
  arriendo: '#CFFAFE',
  servicios: '#EDE9FE',
}

function formatPrice(price, priceLabel) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${priceLabel ?? ''}`
}

export default function ListingCard({ listing, onClick }) {
  const hasImage = listing.images && listing.images.length > 0
  const emoji = PLACEHOLDER_EMOJI[listing.category] ?? '🛍️'
  const bg = PLACEHOLDER_BG[listing.category] ?? '#F3F4F6'

  return (
    <button
      onClick={() => onClick(listing)}
      className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200 text-left w-full border border-gray-100"
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden"
        style={{ backgroundColor: bg }}>
        {hasImage ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-40">{emoji}</span>
          </div>
        )}
        {listing.images && listing.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-md font-medium">
            +{listing.images.length - 1} fotos
          </div>
        )}
        {listing.featured && (
          <div className="absolute top-2 left-2 bg-[#00205B] text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase">
            Destacado
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="font-bold text-[#00205B] text-base leading-tight">
          {formatPrice(listing.price, listing.priceLabel)}
        </p>
        <p className="text-sm text-gray-800 mt-0.5 leading-snug line-clamp-2">
          {listing.title}
        </p>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {listing.campus ?? 'San Joaquín'}
        </p>
      </div>
    </button>
  )
}
