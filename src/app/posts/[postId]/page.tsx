import { GetPostsId } from '@/app/scripts/post'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
export default async function Post({ params }: { params: { postId: string } }) {
  const post: any = await GetPostsId(params.postId.toString())

  return (
    <>
      <Link href="/posts" className='py-5 px-20 rounded inline-flex items-center'>
        <AiOutlineArrowLeft />
        Voltar
      </Link>
      <article className="prose xl:prose-md p-20"
        dangerouslySetInnerHTML={{ __html: post }}>
      </article>
    </>
  )
}