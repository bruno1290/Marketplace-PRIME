import { CATEGORIES } from '../data/listings'

export default function CategoryFilter({ selected, onSelect, counts }) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
      {CATEGORIES.map(cat => {
        const count = cat.id === 'all' ? counts.all : (counts[cat.id] ?? 0)
        const active = selected === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0
              ${active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-700'
              }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
            {count > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold
                ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
