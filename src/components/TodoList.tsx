'use client'

import { useFilter } from '@/hooks/useFilter'
import { useTodos } from '@/hooks/useTodos'
import { AnimatePresence, motion } from 'framer-motion'
import { Todo } from '@/types/todo'

export default function TodoList() {
  const { data: todos, isLoading, isError, editTodo, removeTodo } = useTodos()
  const filter = useFilter()

  if (isLoading) return <p>로딩 중...</p>
  if (isError) return <p>에러가 발생했습니다.</p>

  const filtered = todos?.filter((todo: Todo) => {
    if (filter === 'done') return todo.completed
    if (filter === 'not-yet') return !todo.completed
    return true
  })

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {filtered?.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            layout
            className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-3 border rounded bg-white dark:bg-gray-800"
          >
            <div className="flex-1">
              <p
                onClick={() => editTodo.mutate({ ...todo, completed: !todo.completed })}
                className={`cursor-pointer break-words ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.title}
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(todo.createdAt).toLocaleDateString()}
              </span>
            </div>
            <button
              onClick={() => removeTodo.mutate(todo.id)}
              className="self-end sm:self-auto text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
