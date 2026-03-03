import PostClient from "@/components/wrapper/PostClient";
import { fetchPost } from "@/lib/api";

export default async function Home() {
    const posts = await fetchPost();

    return (
        <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <div>
                <PostClient posts={posts} />
            </div>
        </div>
    );
}
