import { FetchMovies } from "@/utils/getMovies";

async function MovieItems() {
    const data = await FetchMovies();
   
    return (
      <>
      {data.map((post, index) => {
        return (
            <div key={index}>
                <h4>{post.name}</h4>
                <p className="data">{post.id}</p>
            </div>
        )
   })}
     </>
    );
   }
   
export default MovieItems;