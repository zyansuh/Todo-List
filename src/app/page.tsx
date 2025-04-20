import FilterTabs from '@/components/FilterTabs'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📝 투두 리스트</h1>
      <FilterTabs />
      <TodoForm />
      <TodoList />
    </main>
  )
}
