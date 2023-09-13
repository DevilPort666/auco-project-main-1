import { FetchMovieDetails } from "@/utils/getMovies";
import Link from "next/link";

async function MovieDetail({params}){
    const data = await FetchMovieDetails(params.id)
    return(
        <div className="flex items-center h-screen">
            <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-full w-60 object-cover"
                            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                            alt={data.name}
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {data.original_language}
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-medium text-black"
                        >
                            {data.name}
                        </a>
                        <p className="mt-2 text-gray-500">{data.overview}</p>
                        <p className="mt-2 text-gray-500"><b>Rating: </b>{data.vote_average}/10</p>
                    </div>
                    <Link href="/api2">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded inline-block">Back</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default MovieDetail;