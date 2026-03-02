import Image from "next/image";
import { fetchPost } from "@/lib/api";
import SearchBar from "@/components/ui/Searchbar";

export default async function Home() {
    const posts = await fetchPost();

    return (
        <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <div></div>
            <SearchBar />
            <div className="grid grid-cols-1 mx-auto gap-4 w-4/5 sm:grid-cols-2 lg:grid-cols-3">
                {" "}
                {posts.map((post) => (
                    <div key={post.id} className="bg-gray-800 p-2">
                        <h1 className="font-bold">{post.title}</h1>
                        <div>{post.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
