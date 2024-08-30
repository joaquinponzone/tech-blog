'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { Topic } from '@/lib/types'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export default function TopicsFilter({ topics }: { topics: Topic[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const tags = searchParams.get('tags')?.split(',').filter(Boolean) || []
    setSelectedTags(tags)
  }, [searchParams])

  const handleValueChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()

      const value = e.currentTarget.value
      const params = new URLSearchParams(searchParams.toString())
      let updatedTags: string[]

      if (selectedTags.includes(value)) {
        updatedTags = selectedTags.filter((tag) => tag !== value)
      } else {
        updatedTags = [...selectedTags, value]
      }

      setSelectedTags(updatedTags)

      if (updatedTags.length > 0) {
        params.set('tags', updatedTags.join(','))
      } else {
        params.delete('tags')
      }

      startTransition(() => {
        router.push(`?${params.toString()}`, { scroll: false })
      })
    },
    [router, searchParams, selectedTags]
  )

  const handleAllClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()

      setSelectedTags([])
      const params = new URLSearchParams(searchParams.toString())
      params.delete('tags')
      startTransition(() => {
        router.push(`?${params.toString()}`, { scroll: false })
      })
    },
    [router, searchParams]
  )

  return (
    <div className="w-full bg-black p-4">
      <span className="font-medium text-white">Topics</span>
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button
          value=""
          onClick={handleAllClick}
          variant="outline"
          className={`rounded-full border-neutral-700 ${selectedTags.length === 0 ? 'bg-primary text-black' : 'bg-transparent'} hover:bg-neutral-700`}
          disabled={isPending}
        >
          All
        </Button>
        {topics?.map((topic) => (
          <Button
            key={topic.value}
            value={topic.value}
            onClick={handleValueChange}
            variant={selectedTags.includes(topic.value) ? 'default' : 'outline'}
            className={`rounded-full p-1 text-sm font-thin lg:p-2 ${
              selectedTags.includes(topic.value)
                ? 'bg-primary text-black'
                : 'border-neutral-700 bg-transparent text-white hover:bg-neutral-700'
            }`}
            disabled={isPending}
          >
            {topic.label}
            {isPending && selectedTags.includes(topic.value) && (
              <Loader2 className="ml-2 size-4 animate-spin" />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
