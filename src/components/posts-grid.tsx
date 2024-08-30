import { Post } from "@/lib/types";
import PostCard from "./post-card";

export default function PostsGrid({ posts, startIndex }: { posts: Post[], startIndex: number }) {
    const isEven = startIndex % 2 === 0;

    return (
        <>
            {/* desktop */}
            <section className="mb-12 hidden grid-cols-1 gap-6 md:grid-cols-2 lg:grid lg:h-[600px]">
                {!isEven ? (
                <>
                    <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
                        <PostCard postId={posts[0].id}  />
                    </div>
                    <div className="col-span-1 space-y-3">
                        {posts.slice(1, 3).map((post, index) => (
                            <div key={post.id} className="relative h-full overflow-hidden rounded-lg">
                                <PostCard postId={post.id}  />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="col-span-1 space-y-3">
                        {posts.slice(1, 3).map((post, index) => (
                            <div key={post.id} className="relative h-full overflow-hidden rounded-lg">
                                <PostCard postId={post.id}  />
                            </div>
                        ))}
                    </div>
                    <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
                        <PostCard postId={posts[0]?.id} />
                    </div>
                </>
            )}
        </section>

{/* mobile */}
<section className="mb-12 grid grid-cols-1 gap-6 lg:hidden">
{posts.map((post) => (
    <article key={post.id} className="relative h-[300px] overflow-hidden rounded-lg">
        <PostCard postId={post.id} />
    </article>
                ))}
            </section>
        </>
    );
}
