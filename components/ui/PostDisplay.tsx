import Link from "next/link";
import { Post } from "@/interfaces/post";

export default function PostDisplay({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 mx-auto gap-4 w-4/5 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {posts.map((post) => (
                <div key={post.id} className="bg-gray-800 p-2">
                    <Link href={`/post/${post.id}`}>
                        {" "}
                        <h1 className="font-bold hover:text-blue-800">
                            {post.title}
                        </h1>
                    </Link>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}
