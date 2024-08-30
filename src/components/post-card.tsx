import { Post } from "@/lib/types";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPost(postId: number) {
    const response = postId ? await fetch(`http://localhost:3000/api/post/${postId}`, { cache: 'no-store' }) : null
    const { data } = response?.ok ? await response.json() : null
    const post = data as Post
    return post
}

export default async function PostCard({ postId }: { postId: number }) {
    const post = await getPost(postId)

    if (!post) return (
        <div className="absolute bottom-0 left-0 m-3 w-fit bg-white p-4 text-black">
            <span className="bg-primary mb-2 inline-block rounded-full px-2 py-1 text-xs font-medium text-black">
                Not found
            </span>
            <h3 className="mb-2 text-lg font-bold">Not found</h3>
        </div>
    )

    return (
        <>
            <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="brightness-75"
            />
            <div className="absolute bottom-0 left-0 m-3 w-fit min-w-[300px] bg-white p-4 text-black">
                <span className="bg-primary mb-2 inline-block rounded-full px-2 py-1 text-xs font-medium text-black">
                    {post.tag}
                </span>
                <h3 className="mb-2 text-lg font-bold">
                    {/* <span className="mr-2 text-sm text-gray-500">#{post.id}</span> */}
                    {post.title}
                </h3>
                <div className="flex items-center justify-between">
                    <Link
                        href={`/post/${post.id}`}
                        className="inline-flex items-center space-x-1 text-sm hover:underline"
                    >
                        <span>Read</span>
                        <ArrowRight className="size-4 text-purple-500" />
                    </Link>
                    <div className="mt-2 flex items-center space-x-2 text-sm ">
                        <Clock className="size-4" />
                        <span>{post.read_time}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
