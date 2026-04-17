import { useState } from 'react'

const PLACEHOLDER_BG = {
  ropa: '#FEF2F2', tech: '#EFF6FF', entradas: '#FFFBEB',
  suplementos: '#F0FDF4', libros: '#FEFCE8', arriendo: '#F0F9FF', servicios: '#FAF5FF',
}

const PLACEHOLDER_EMOJI = {
  ropa: '👕', tech: '📱', entradas: '🎟️',
  suplementos: '💪', libros: '📚', arriendo: '🏠', servicios: '🔧',
}

function formatPrice(price, label) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${label ?? ''}`
}

export default function ListingCard({ listing, onClick }) {
  const [saved, setSaved] = useState(false)
  const hasImg = listing.images?.length > 0

  return (
    <article
      onClick={() => onClick(listing)}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'}
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden"
        style={{ backgroundColor: PLACEHOLDER_BG[listing.category] ?? '#F9FAFB' }}>
        {hasImg ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-25">
            {PLACEHOLDER_EMOJI[listing.category] ?? '🛍️'}
          </div>
        )}

        {/* Heart */}
        <button
          onClick={e => { e.stopPropagation(); setSaved(s => !s) }}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
        >
          <svg className="w-4 h-4" fill={saved ? '#EF4444' : 'none'} stroke={saved ? '#EF4444' : '#6b7280'} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {listing.featured && (
          <div className="absolute top-2.5 left-2.5 bg-[#00205B] text-white text-[9px] font-montserrat font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
            Destacado
          </div>
        )}

        {listing.images?.length > 1 && (
          <div className="absolute bottom-2 right-2 rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-white"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            +{listing.images.length - 1}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <p className="font-montserrat font-black text-[#00205B] text-[15px] leading-tight mb-1">
          {formatPrice(listing.price, listing.priceLabel)}
        </p>
        <p className="text-gray-700 text-sm leading-snug line-clamp-2 mb-2">
          {listing.title}
        </p>
        <p className="text-gray-400 text-xs flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          {listing.campus ?? 'San Joaquín'}
        </p>
      </div>
    </article>
  )
}
