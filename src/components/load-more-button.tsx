'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function LoadMoreButton() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const scrollPositionRefLoadMore = useRef(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, scrollPositionRefLoadMore.current)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [searchParams])

  const handleLoadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setIsLoading(true)
    scrollPositionRefLoadMore.current = window.scrollY
    const params = new URLSearchParams(searchParams)
    const currentLimit = Number(params.get('limit') || '8')
    const newLimit = currentLimit + 3
    params.set('limit', newLimit.toString())
    replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <Button onClick={handleLoadMore} disabled={isLoading}>
      {isLoading ? <Loader2 className="animate-spin" /> : 'Load more'}
    </Button>
  )
}
