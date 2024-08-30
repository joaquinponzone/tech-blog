'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { NewPostForm } from './new-post-form'
import { Button } from './ui/button'

export default function NewPostModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [done, setDone] = useState<boolean>(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-primary border-[3px] border-black p-16 shadow-2xl shadow-black">
        {done ? (
          <div className="grid gap-8">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl text-black">
                Your post was successfully uploaded!
              </DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <div className="flex w-full justify-center">
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    window.location.reload()
                  }}
                  type="submit"
                  className="hover:text-primary bg-black text-white hover:bg-black"
                  size="lg"
                >
                  Done
                </Button>
              </div>
            </DialogFooter>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-3xl text-black">
                Upload your post
              </DialogTitle>
              <DialogDescription className="text-center text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center">
              <div className="flex w-[70%] flex-col gap-2">
                <NewPostForm setDone={() => setDone(true)} />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
