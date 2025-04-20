'use client'

import { useTodos } from '@/hooks/useTodos'
import { Todo } from '@/types/todo'

export default function TodoList() {
  const { data: todos, isLoading, isError, editTodo, removeTodo } = useTodos()

  if (isLoading) return <p>로딩 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  return (
    <ul className="space-y-2">
      {todos?.map((todo: Todo) => (
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
