import { useState, useEffect } from 'react'

const CATEGORY_LABELS = {
  ropa: '👕 Ropa',
  tech: '📱 Tech',
  entradas: '🎟️ Entradas',
  suplementos: '💪 Suplementos',
  libros: '📚 Libros',
  arriendo: '🏠 Arriendo',
  servicios: '🔧 Servicios',
}

function formatPrice(price, priceLabel) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${priceLabel ?? ''}`
}

export default function ListingModal({ listing, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    setImgIndex(0)
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [listing, onClose])

  if (!listing) return null

  const hasImages = listing.images && listing.images.length > 0
  const imgs = listing.images ?? []

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Sheet */}
      <div className="relative z-10 bg-white w-full sm:max-w-lg sm:rounded-3xl rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Images */}
        {hasImages ? (
          <div className="relative bg-gray-100">
            <img
              src={imgs[imgIndex]}
              alt={listing.title}
              className="w-full aspect-square object-cover"
            />
            {imgs.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex(i => (i - 1 + imgs.length) % imgs.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={() => setImgIndex(i => (i + 1) % imgs.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full aspect-square bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
            <span className="text-7xl opacity-40">🛍️</span>
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
            {CATEGORY_LABELS[listing.category]}
          </span>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mt-3 mb-1">{listing.title}</h2>

          {/* Price */}
          <p className="text-3xl font-extrabold text-violet-700 mb-4">
            {formatPrice(listing.price, listing.priceLabel)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {listing.condition && (
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {listing.condition}
              </span>
            )}
            {listing.campus && (
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
                <span>📍</span> {listing.campus}
              </span>
            )}
            {listing.tallas && listing.tallas.length > 0 && listing.tallas.map(t => (
              <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">
                Talla {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            {listing.description}
          </p>

          {/* Seller */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              {listing.seller[0].toUpperCase()}
            </div>
            <div>
              <p className="text-xs text-gray-400">Vendido por</p>
              <p className="text-sm font-semibold text-gray-800">{listing.seller}</p>
              {listing.contactInfo && (
                <p className="text-xs text-gray-500 mt-0.5">{listing.contactInfo}</p>
              )}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              const msg = `Hola! Vi tu publicación de "${listing.title}" en el marketplace de Comercial UC y me interesa 👀`
              const url = `https://wa.me/?text=${encodeURIComponent(msg)}`
              window.open(url, '_blank')
            }}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-violet-200 transition-all hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
