import { GetPosts, GetPostsId } from "../scripts/post"

export default async function Post() {
    const allPost: any = await GetPosts()
    console.log(allPost);
    return (
        <main className="bg-gray-800">
            <h1>Lista de Posts</h1>
            {allPost.map((post: any) => {
                return <a href={`posts/${post.id}`} key={post.id} className="text-stone-300 block">{post?.title}</a>
            })}
        </main>
    )
}

