import { ArrowRight, AsteriskIcon } from "lucide-react";
import Link from "next/link";
import NewPostModal from "../new-post-modal";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-6">
            <Link href="/" className="flex items-center space-x-2">
                <AsteriskIcon className="text-primary size-12" />
                <span className="text-4xl font-bold">lite-tech</span>
            </Link>
            <NewPostModal>
                <Button variant={"ghost"} className="hover:text-primary text-xl hover:bg-transparent" size={"lg"}>
                    New post
                    <ArrowRight className="text-primary size-4" />
                </Button>
            </NewPostModal>
            </div>

        </header>
    )
}
