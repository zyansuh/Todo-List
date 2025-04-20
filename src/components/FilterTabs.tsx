'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const filters = ['all', 'done', 'not-yet'] as const
export type FilterType = (typeof filters)[number]

export default function FilterTabs() {
  const router = useRouter()
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterType
    if (filters.includes(filter)) {
      setCurrentFilter(filter)
    } else {
      setCurrentFilter('all')
    }
  }, [typeof window !== 'undefined' && window.location.search])

  const handleChange = (filter: FilterType) => {
    router.push(`/?filter=${filter}`)
    setCurrentFilter(filter)
  }

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleChange(filter)}
          className={`px-3 py-1 rounded border transition-all duration-200 ${
            currentFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          {filter === 'all' && '전체'}
          {filter === 'done' && '완료'}
          {filter === 'not-yet' && '미완료'}
        </button>
      ))}
    </div>
  )
}
