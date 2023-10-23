import { GetPostsId } from '@/app/scripts/post'

export default async function Post({ params }: { params: { postId: string } }) {
  const post: any = await GetPostsId(params.postId.toString())

  return (
    <>
      <a href="/posts">Voltar</a>
      <article className="prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: post }}></div>
      </article>

    </>
  )
}