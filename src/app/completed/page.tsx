'use client'

import TodoList from '@/components/TodoList'
import Link from 'next/link'

export default function CompletedPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ 완료된 투두</h1>
      <Link href="/" className="text-blue-500 underline text-sm mb-2 inline-block">
        ← 돌아가기
      </Link>
      <TodoList />
    </main>
  )
}