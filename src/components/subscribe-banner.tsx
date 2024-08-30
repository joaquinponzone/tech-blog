import React from 'react'
import { Button } from './ui/button'

export default function SubscribeBanner() {
  return (
    <section className="bg-accent my-4 flex h-80 flex-col items-center justify-center gap-2 px-8 py-[40px] lg:h-32 lg:flex-row lg:px-16">
      <h2 className="text-2xl font-extralight">
        Sign up for our newsletter <span className="font-semibold">and get daily updates</span>
      </h2>
      <Button size={'lg'} className="text-xl">
        Subscribe
      </Button>
    </section>
  )
}
