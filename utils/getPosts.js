import axios from "axios";

export const getPosts = async() => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data
}

export const getPostDetails = async(id) => {
    const [postRes, commentsRes] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
      ]);
    
    return {
          post: postRes.data,
          comments: commentsRes.data,
    };
}
