import { FetchMovies } from "@/utils/getMovies";
import Image from "next/image";
import Link from "next/link";

async function MovieItems() {
    const data = await FetchMovies();
   
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-8">
        <h1 className="col-span-full text-center text-white text-3xl pb-9">Lista de Shows de TV</h1>
        {data.map((post, index) => {
            return (
                <Link href= {`/api2/movie/${post.id}`} as= {`/api2/movie/${post.id}`}>
                    <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer user-select-none" key={index}>
                        <div className="flex justify-center">
                            <Image className="border 1px solid white" src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt={post.name} width={250} height={300} quality={100} priority={false}/>
                        </div>
                        <h1 className="text-center text-white pt-4">{post.name}</h1>
                        <p className="text-center text-white text-sm">Rating: {post.vote_average}/10</p>
                        <p className="text-center text-white pb-10">País de Origen: {post.origin_country}</p>
                    </div>
                </Link>    
            )
        })}
     </div>
    );
   }
   
export default MovieItems;