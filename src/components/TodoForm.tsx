'use client'

import { FormEvent, useState } from 'react'
import { useTodos } from '@/hooks/useTodos'

export default function TodoForm() {
  const [input, setInput] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    addTodo.mutate({
      title: input.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    })

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        추가
      </button>
    </form>
  )
}