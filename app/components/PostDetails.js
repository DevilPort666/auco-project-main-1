function PostDetails({ post, onClick }) {
    return (
      <div className="card-gradient overflow-hidden shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer text-gray-800">
        <h2 className="text-xl font-semibold mb-2 hover:text-gray-900 transition-colors duration-300">{post.title}</h2>
        <p className="text-gray-800 mb-4 line-clamp-2">{post.body}</p>
        <p className="text-gray-700 text-sm">Escrito por: {post.userId}</p>
      </div>
    );
  }
  
export default PostDetails;