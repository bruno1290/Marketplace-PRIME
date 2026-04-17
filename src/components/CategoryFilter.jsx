import { CATEGORIES } from '../data/listings'

export default function CategoryFilter({ selected, onSelect, counts }) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1 md:hidden">
      {CATEGORIES.map(cat => {
        const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
        const active = selected === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0
              ${active
                ? 'bg-[#00205B] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#00205B] hover:text-[#00205B]'
              }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
            <span className={`text-xs px-1 rounded-full font-bold
              ${active ? 'bg-white/20 text-white' : 'text-gray-400'}`}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
