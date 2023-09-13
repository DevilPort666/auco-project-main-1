import PostDetails from "./PostDetails";
import Link from "next/link";

const PostPage =({ posts=[] }) =>{
    return(
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4 pt-4 pb-4 text-center">Lista de Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link href={`/api1/post/${post.id}`} as= {`/api1/post/${post.id}`} >
                        <PostDetails key={post.id} post={post} />
                    </Link>
                    
                ))}
            </div>
        </div>
    )
}

export default PostPage;