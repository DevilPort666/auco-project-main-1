import axios from 'axios';
import PostDetails from '@/app/components/PostDetails';
import { useRouter } from 'next/router';
import "../app/styles/globals.css"

function Home({ posts }) {
  const router = useRouter();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <PostDetails key={post.id} post={post} onClick={() => router.push(`/post/${post.id}`)} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
    props: { posts: data },
  };
}

export default Home;