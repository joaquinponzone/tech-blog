import { ArrowRight, AsteriskIcon } from 'lucide-react'
import Link from 'next/link'
import NewPostModal from '../new-post-modal'
import { Button } from '../ui/button'

export default function Header() {
  const newLocal = 'hover:text-primary text-base hover:bg-transparent lg:text-xl'
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center space-x-2">
          <AsteriskIcon className="text-primary size-12" />
          <span className="text-2xl font-bold lg:text-4xl">lite-tech</span>
        </Link>
        <NewPostModal>
          <Button variant={'ghost'} className={newLocal} size={'lg'}>
            New post
            <ArrowRight className="text-primary size-4" />
          </Button>
        </NewPostModal>
      </div>
    </header>
  )
}
