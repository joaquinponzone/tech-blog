import { apiUrl } from "@/lib/site-config";
import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import NewPostModal from "../new-post-modal";
import { Button } from "../ui/button";

async function getRelatedPosts() {
    const relatedPosts = await fetch(`${apiUrl}/posts/related`, { cache: 'no-store' })
    const { data: posts } = await relatedPosts.json()
    return posts as Post[]
}

export default async function RelatedPosts() {
    const related_posts = await getRelatedPosts()

    return (
        <div className="mt-12">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Related posts</h2>
                <NewPostModal>
                    <Button variant={"ghost"} className="hover:bg-transparent" size={"lg"}>
                        New post
                        <ArrowRight className="text-primary size-4" />
                    </Button>
                </NewPostModal>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related_posts?.map((post: Post) => (
                    <div key={post.id} className="group relative overflow-hidden rounded-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={600}
                            className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4">
                            <div className="w-fit bg-white p-2">
                                <Badge>{post.tag}</Badge>
                            </div>
                            <h3 className="w-fit bg-white p-2 text-lg font-bold text-black">{post.title}</h3>
                            <div className="flex items-center justify-between bg-white p-2">
                                <Link
                                    href={`/post/${post.id}`}
                                    className="inline-flex w-full items-center text-sm text-black hover:underline"
                                >
                                    <span>Read</span>
                                    <ArrowRight className="ml-1 size-4 text-purple-500" />
                                </Link>
                                <div className="mt-2 flex w-full items-center justify-end gap-2 text-xs">
                                    <Clock className="size-3" />
                                    {post.read_time}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
