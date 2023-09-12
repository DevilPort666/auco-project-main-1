import axios from 'axios';

function PostDetail({ post, comments }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <h2 className="text-xl font-bold mt-6 mb-4">Comentarios</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border-b pb-4 mb-4">
          <p className="font-bold">{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const [postRes, commentsRes] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`),
  ]);

  return {
    props: {
      post: postRes.data,
      comments: commentsRes.data,
    },
  };
}

export default PostDetail;