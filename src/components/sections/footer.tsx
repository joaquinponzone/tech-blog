import { AsteriskIcon, FacebookIcon, LinkedinIcon, TwitterIcon, XIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-accent mb-6 h-64 py-6">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 xl:px-32 xl:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center space-x-2">
            <AsteriskIcon className="text-primary size-8" />
            <span className="text-3xl font-bold text-white">lite-tech</span>
          </div>
          <div className="text-sm font-extralight text-white">
            © Copyright Lite-Tech. All Rights Reserved
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary text-white">
            <LinkedinIcon className="size-6" />
          </a>
          <a href="#" className="hover:text-primary text-white">
            <FacebookIcon className="size-6" />
          </a>
          <a href="#" className="hover:text-primary text-white">
            <TwitterIcon className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
