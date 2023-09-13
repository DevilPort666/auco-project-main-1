import axios from "axios";

export const getPosts = async() => {
    try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
}

export const getPostDetails = async(id) => {
    try{
        const [postRes, commentsRes] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
          ]);
        
        return {
              post: postRes.data,
              comments: commentsRes.data,
        };
    }
    catch(error){
        console.error(error);
        return null;
    }
    
}
