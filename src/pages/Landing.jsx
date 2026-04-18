import { useNavigate } from 'react-router-dom'
import Stats from '../components/Stats'
import Features from '../components/Features'
import TrustBadges from '../components/TrustBadges'
import Testimonials from '../components/Testimonials'
import CategoriesAccordion from '../components/CategoriesAccordion'
import Footer from '../components/Footer'

export default function Landing() {
  const navigate = useNavigate()

  const universities = [
    { id: 'puc', name: 'PUC', fullName: 'Pontificia Universidad Católica', color: 'bg-[#00205B]', active: true },
    { id: 'uai', name: 'UAI', fullName: 'Universidad Adolfo Ibáñez', color: 'bg-teal-600', active: false },
    { id: 'udd', name: 'UDD', fullName: 'Universidad del Desarrollo', color: 'bg-blue-600', active: false },
    { id: 'uandes', name: 'UANDES', fullName: 'Universidad de los Andes', color: 'bg-red-800', active: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Top Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 py-20">
        <div className="text-center mb-16 max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-montserrat font-bold text-sm mb-6">
            ¡Bienvenido a MarketSafe!
          </div>
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-gray-900 mb-6 tracking-tight">
            Tu campus, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">tu mercado.</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Compra y vende de forma segura con estudiantes de tu misma universidad. Selecciona tu campus para comenzar.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {universities.map(uni => (
            <div 
              key={uni.id}
              onClick={() => uni.active && navigate(`/${uni.id}`)}
              className={`
                relative overflow-hidden rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300
                ${uni.active ? 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl shadow-lg border-2 border-transparent hover:border-blue-200' : 'cursor-not-allowed opacity-80'}
                ${uni.color}
              `}
              style={{ minHeight: '200px' }}
            >
              {/* University Logo */}
              <div className="w-28 h-28 bg-white/95 rounded-full flex items-center justify-center mb-5 backdrop-blur-sm shadow-xl border-4 border-white/20 p-4 transition-transform hover:scale-105">
                <img 
                  src={`/logos/logo-${uni.id}.png`} 
                  alt={`Logo ${uni.name}`} 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              
              <h3 className="text-2xl font-montserrat font-black text-white mb-2">{uni.fullName}</h3>
              
              {!uni.active && (
                <span className="mt-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  Próximamente
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Informational Sections */}
      <div className="bg-white">
        <Stats />
        <CategoriesAccordion />
        <Features />
        <TrustBadges />
        <Testimonials />
      </div>

      <Footer />
    </div>
  )
}
