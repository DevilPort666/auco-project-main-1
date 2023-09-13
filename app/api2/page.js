import Link from "next/link"
import MovieItems from "../components/MovieItems"

const Api2 = async() => {
    return(
        <div className="bg-black">
            <MovieItems />
            <div className="flex justify-center pb-9">
                <Link href="/">
                    <button className="bg-blue-500 text-white py-2 px-2 rounded inline-block ">
                        Regresar a Lista de APIs
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Api2

