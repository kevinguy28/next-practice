import { fetchSingularPost } from "@/lib/api";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await fetchSingularPost(id);

    return (
        <div>
            <h1>This header is for Post {id}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}
