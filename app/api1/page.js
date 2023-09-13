import PostPage from "@/app/components/PostPage";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts";

const Api1 = async() => {
    const postItems = await getPosts()

    return(
        <>
            <div className="flex py-8 justify-center">
            </div>
            <PostPage posts={postItems}/>
        </>
        
    )
}

export default Api1

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}
