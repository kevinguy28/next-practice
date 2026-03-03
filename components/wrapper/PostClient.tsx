"use client";

import { Post } from "@/interfaces/post";
import PostDisplay from "../ui/PostDisplay";
import SearchBar from "../ui/Searchbar";
import { useState } from "react";

export default function PostClient({ posts }: { posts: Post[] }) {
    const [searchBarInput, setSearchBarInput] = useState<string>("");

    const filteredPosts = posts.filter((post) =>
        post.title
            .toLocaleLowerCase()
            .includes(searchBarInput.toLocaleLowerCase()),
    );

    return (
        <div>
            <SearchBar setSearchBarInput={setSearchBarInput} />
            <PostDisplay posts={filteredPosts} />
        </div>
    );
}
