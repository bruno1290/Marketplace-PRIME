export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-violet-700 via-indigo-700 to-purple-800 text-white px-4 pt-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🛒</span>
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
            Comercial UC · Campus San Joaquín
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
          Compra y vende<br />
          <span className="text-violet-200">entre estudiantes</span>
        </h1>
        <p className="text-sm text-violet-200 max-w-sm">
          El marketplace de tu campus. Encuentra lo que buscas o publica lo que ya no usas.
        </p>
      </div>
    </div>
  )
}
