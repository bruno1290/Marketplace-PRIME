const STEPS = [
  {
    icon: '📸',
    title: 'Publica en segundos',
    desc: 'Sube fotos, escribe el precio y listo. Tu publicación llega a todos los universitarios de tu campus.',
  },
  {
    icon: '💬',
    title: 'Coordina por WhatsApp',
    desc: 'Conecta directamente con el vendedor sin intermediarios. Sin comisiones, sin plataformas de pago.',
  },
  {
    icon: '🤝',
    title: 'Cierra en el campus',
    desc: 'Todo a walking distance. Entrega en la U, sin envíos ni esperas. Rápido y seguro entre estudiantes.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#F8FAFF] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-widest">Simple y rápido</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#00205B] mt-2">
            Vender es cuestión de minutos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                {step.icon}
              </div>
              <div className="w-6 h-6 bg-[#00205B] text-white rounded-full flex items-center justify-center text-xs font-black mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            { icon: '🔒', label: 'Solo universitarios' },
            { icon: '⚡', label: 'Respuesta inmediata' },
            { icon: '✅', label: '0% comisión' },
            { icon: '📍', label: 'Campus cercano' },
          ].map(badge => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
