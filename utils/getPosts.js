export const getPosts = async() => {
    try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json()
        return data;
      } catch (error) {
        console.error(error);
        return [];
      }
}

export const getPostDetails = async(id) => {
    try{
        const [postRes, commentsRes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
          ]);

        const [postResdata, commentsResdata] = await Promise.all([
            postRes.json(),
            commentsRes.json(),
        ]);
        return {
              post: postResdata,
              comments: commentsResdata,
        };
    }
    catch(error){
        console.error(error);
        return null;
    }
    
}
