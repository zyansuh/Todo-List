'use client'

import { useEffect, useState } from 'react'

export type FilterType = 'all' | 'done' | 'not-yet'

export const useFilter = (): FilterType => {
  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter') as FilterType
    if (f === 'done' || f === 'not-yet') {
      setFilter(f)
    } else {
      setFilter('all')
    }
  }, []) 

  return filter
}
