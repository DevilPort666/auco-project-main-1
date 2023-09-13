import Link from 'next/link';
import { getPostDetails } from '@/utils/getPosts';

async function PostDetail({params}) {
  const {post, comments} = await getPostDetails(params.id);
  return (
    <div className="container mx-auto p-6 font-serif flex justify-center items-center min-h-screen">
      <div className="card-gradient bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
        <p className="mb-8 text-lg leading-relaxed">{post.body}</p>
        <h2 className="text-3xl font-bold mb-4">Comentarios</h2>
        {comments.map((comment) => (
            <div key={comment.id} className="mb-4">
            <h3 className="text-xl font-bold">{comment.name}</h3>
            <p className="text-lg leading-relaxed">{comment.body}</p>
            </div>
        ))}
        <div className="text-center mb-4">
            <Link href="/api1">
            <button className="bg-blue-500 text-white py-2 px-4 rounded inline-block">
                Go Back to Posts
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}


export default PostDetail;