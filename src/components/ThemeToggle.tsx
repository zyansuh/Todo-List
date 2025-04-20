'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    dark ? html.classList.add('dark') : html.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mb-4 px-3 py-1 border rounded text-sm"
    >
      {dark ? '☀️ 라이트 모드' : '🌙 다크 모드'}
    </button>
  )
}
