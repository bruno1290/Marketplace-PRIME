const STATS = [
  { value: '50+', label: 'Universidades chilenas' },
  { value: '10.000+', label: 'Estudiantes en la red' },
  { value: '19+', label: 'Publicaciones activas' },
  { value: '100+', label: 'Nuevos estudiantes por día' },
]

export default function Stats() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(s => (
          <div key={s.label} className="text-center">
            <p className="font-montserrat font-black text-4xl sm:text-5xl text-[#00205B] mb-1">{s.value}</p>
            <p className="text-sm text-gray-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
