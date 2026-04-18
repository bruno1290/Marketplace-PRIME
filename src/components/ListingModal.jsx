import { useState, useEffect } from 'react'

const CATEGORY_LABELS = {
  ropa: '👕 Ropa', tech: '📱 Tech', entradas: '🎟️ Entradas',
  suplementos: '💪 Suplementos', libros: '📚 Libros',
  arriendo: '🏠 Arriendo', servicios: '🔧 Servicios',
}

function formatPrice(price, priceLabel) {
  if (!price) return 'Precio a convenir'
  return `$${price.toLocaleString('es-CL')}${priceLabel ?? ''}`
}

export default function ListingModal({ listing, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    setImgIndex(0)
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [listing, onClose])

  if (!listing) return null
  const imgs = listing.images ?? []

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col md:flex-row">

        {/* Close btn */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="md:w-1/2 bg-gray-50 relative shrink-0">
          {imgs.length > 0 ? (
            <>
              <img src={imgs[imgIndex]} alt={listing.title}
                className="w-full aspect-square object-cover md:h-full md:aspect-auto" />
              {imgs.length > 1 && (
                <>
                  <button onClick={() => setImgIndex(i => (i - 1 + imgs.length) % imgs.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-700 font-bold hover:bg-white transition-colors">‹</button>
                  <button onClick={() => setImgIndex(i => (i + 1) % imgs.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-700 font-bold hover:bg-white transition-colors">›</button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {imgs.map((_, i) => (
                      <button key={i} onClick={() => setImgIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-[#00205B] w-4' : 'bg-white/70 w-1.5'}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full aspect-square md:h-full flex items-center justify-center bg-gray-100">
              <span className="text-7xl opacity-20">🛍️</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="md:w-1/2 flex flex-col overflow-y-auto">
          <div className="p-5 flex-1">
            <span className="text-xs font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-full">
              {CATEGORY_LABELS[listing.category]}
            </span>

            <p className="text-3xl font-black text-[#00205B] mt-4 mb-1">
              {formatPrice(listing.price, listing.priceLabel)}
            </p>
            <h2 className="text-base font-semibold text-gray-800 mb-4">{listing.title}</h2>

            <div className="border-t border-gray-100 mb-4" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {listing.condition && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{listing.condition}</span>
              )}
              {listing.campus && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">📍 {listing.campus}</span>
              )}
              {listing.tallas?.map(t => (
                <span key={t} className="text-xs border border-[#00205B]/30 text-[#00205B] px-3 py-1 rounded-full font-medium">
                  Talla {t}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">{listing.description}</p>

            {/* Seller */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
              <div className="w-10 h-10 rounded-full bg-[#00205B] flex items-center justify-center text-white font-black text-sm shrink-0">
                {listing.seller[0].toUpperCase()}
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Vendedor</p>
                <p className="text-sm font-bold text-gray-800">{listing.seller}</p>
                {listing.contactInfo && <p className="text-xs text-gray-400 mt-0.5">{listing.contactInfo}</p>}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={() => {
                const msg = `Hola ${listing.seller}! Vi tu publicación "${listing.title}" en MarketSafe PUC 👋 ¿Sigue disponible?`
                window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
              }}
              className="w-full bg-[#00205B] hover:bg-[#003080] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2.5 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar vendedor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
