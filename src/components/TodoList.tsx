'use client'

import { useTodos } from '@/hooks/useTodos'
import { Todo } from '@/types/todo'
import { useSearchParams } from 'next/navigation'

export default function TodoList() {
  const { data: todos, isLoading, isError, editTodo, removeTodo } = useTodos()
  const filter = useSearchParams().get('filter') || 'all'

  if (isLoading) return <p>로딩 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  const filtered = todos?.filter((todo: Todo) => {
    if (filter === 'done') return todo.completed
    if (filter === 'not-yet') return !todo.completed
    return true
  })

  return (
    <ul className="space-y-2">
      {filtered?.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-3 border rounded bg-white"
        >
          <span
            onClick={() =>
              editTodo.mutate({ ...todo, completed: !todo.completed })
            }
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
          >
            {todo.title}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
  {new Date(todo.createdAt).toLocaleDateString()}
</span>

          <button
            onClick={() => removeTodo.mutate(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}
