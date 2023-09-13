function PostDetails({ post }) {
    return (
      <div className="card-gradient overflow-hidden shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer text-gray-800">
        <h2 className="text-2xl font-bold mb-2 truncate">{post.title}</h2>
        <p className="text-gray-800 mb-4 line-clamp-2">{post.body}</p>
        <p className="text-gray-700 text-sm">Escrito por: {post.userId}</p>
      </div>
    );
  }
  
export default PostDetails;