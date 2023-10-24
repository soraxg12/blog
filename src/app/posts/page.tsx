import { Post } from "@/components/post";
import { GetPosts } from "../scripts/post"

export default async function Posts() {
    const allPost: any = await GetPosts()
    console.log(allPost);
    return (
        <main className="bg-slate-200">
            <h1 className="text-gray-900 font-extrabold text-3xl px-10 pt-5">Posts</h1>
            {allPost.map((post: any) => {
                return <Post key={post.id}
                    title={post.title}
                    desc="" id={post.id}
                    date="12-10-2023"
                />
            })}
        </main>
    )
}

