'use client'

import { FormEvent, useState } from 'react'
import { useTodos } from '@/hooks/useTodos'

export default function TodoForm() {
  const [input, setInput] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    addTodo.mutate({
      title: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    })

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 flex-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:scale-95 transition"
      >
        추가
      </button>
    </form>
  )
}
