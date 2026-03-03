import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";

export async function fetchPost(
    page: number = 1,
    limit: number = 12,
): Promise<Post[]> {
    const start = (page - 1) * limit;
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
        );
        if (!res.ok) {
            throw new Error(`Response status: ${res.status} `);
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchSingularPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        notFound();
    }
    return res.json();
}
