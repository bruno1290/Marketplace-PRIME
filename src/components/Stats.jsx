const STATS = [
  { value: '50+', label: 'Universidades chilenas' },
  { value: '10.000+', label: 'Estudiantes en la red' },
  { value: '100%', label: 'Sin comisiones' },
  { value: '∞', label: 'A walking distance' },
]

export default function Stats() {
  return (
    <section className="border-y border-gray-100 py-14 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map(s => (
          <div key={s.label} className="text-center">
            <p className="font-montserrat font-black text-[#00205B]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {s.value}
            </p>
            <p className="text-gray-400 text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
