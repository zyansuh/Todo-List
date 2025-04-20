'use client'
export const dynamic = 'force-dynamic'

import FilterTabs from '@/components/FilterTabs'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 투두 리스트</h1>
      <ThemeToggle />
      <FilterTabs />
      <TodoForm />
      <TodoList />
    </main>
  )
}
