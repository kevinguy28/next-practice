"use client";
import { Post } from "@/interfaces/post";
import { useState } from "react";
import PostDisplay from "../ui/PostDisplay";

export default function PostClient(posts: Post[]) {
    const [searchBarInput, setSearchBarInput] = useState<string>("");

    const filteredPosts = posts.filter((post) =>
        post.title
            .toLocaleLowerCase()
            .includes(searchBarInput.toLocaleLowerCase()),
    );

    return <PostDisplay posts={filteredPosts} />;
}
