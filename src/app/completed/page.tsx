'use client'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import TodoList from '@/components/TodoList'
import Link from 'next/link'
import { Suspense } from 'react'

export default function CompletedPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ 완료된 투두</h1>
      <Link href="/" className="text-blue-500 underline text-sm mb-2 inline-block">
        ← 돌아가기
      </Link>
      <Suspense fallback={<p>로딩 중...</p>}>
        <TodoList />
      </Suspense>
    </main>
  )
}
