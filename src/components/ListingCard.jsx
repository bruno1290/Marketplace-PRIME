import { useState } from 'react'

const PLACEHOLDER_EMOJI = {
  ropa: '👕', tech: '📱', entradas: '🎟️',
  suplementos: '💪', libros: '📚', arriendo: '🏠', servicios: '🔧',
}

const PLACEHOLDER_BG = {
  ropa: '#FEE2E2', tech: '#DBEAFE', entradas: '#FEF3C7',
  suplementos: '#D1FAE5', libros: '#FEF9C3', arriendo: '#E0F2FE', servicios: '#F3E8FF',
}

function formatPrice(price, priceLabel) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${priceLabel ?? ''}`
}

export default function ListingCard({ listing, onClick }) {
  const [saved, setSaved] = useState(false)
  const hasImage = listing.images?.length > 0

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div
        className="relative aspect-square cursor-pointer overflow-hidden"
        style={{ backgroundColor: PLACEHOLDER_BG[listing.category] ?? '#F3F4F6' }}
        onClick={() => onClick(listing)}
      >
        {hasImage ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">{PLACEHOLDER_EMOJI[listing.category] ?? '🛍️'}</span>
          </div>
        )}

        {/* Save button */}
        <button
          onClick={e => { e.stopPropagation(); setSaved(s => !s) }}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <svg className="w-4 h-4" fill={saved ? '#EF4444' : 'none'} stroke={saved ? '#EF4444' : '#6B7280'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {listing.featured && (
          <div className="absolute top-2.5 left-2.5 bg-[#00205B] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Destacado
          </div>
        )}

        {listing.images?.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-md font-medium backdrop-blur-sm">
            +{listing.images.length - 1}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 cursor-pointer" onClick={() => onClick(listing)}>
        <p className="font-black text-[#00205B] text-base leading-none mb-1">
          {formatPrice(listing.price, listing.priceLabel)}
        </p>
        <p className="text-sm text-gray-700 line-clamp-2 leading-snug mb-2">
          {listing.title}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {listing.campus ?? 'San Joaquín'}
          </span>
          {listing.condition && (
            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {listing.condition.split(' — ')[0]}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
