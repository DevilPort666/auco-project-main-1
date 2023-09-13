import Link from "next/link"

const MainItems = () => {
    return(
        <div className="h-screen h-[93vh] flex flex-col bg-gray-100 py-4">
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="flex mx-auto max-w-screen-xl space-x-8 p-4">
                    <div
                    className="w-72 h-200 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                        backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/113/10/desktop-wallpaper-newspaper-edit-aesthetic-toedit-newspaper-collage-vintage-newspaper-aesthetic-iphone.jpg")',
                    }}
                    >
                        <Link href="/api1">
                            <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg h-full flex flex-col justify-end">
                            <h2 className="text-white font-bold">API Posts</h2>
                            <p className="text-white">Este proyecto está basado en la API de JSONPlaceholder</p>
                            </div>
                        </Link>
                    </div>
                    <div
                    className="w-72 h-80 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                        backgroundImage: 'url("https://wallpapers.com/images/high/horror-movie-collage-1080-x-1920-g8faltr4yj1659im.webp")',
                    }}
                    >
                        <Link href="/api2">
                            <div className="p-4 bg-gray-800 bg-opacity-60 rounded-lg h-full flex flex-col justify-end">
                            <h2 className="text-white font-bold">API TMDB</h2>
                            <p className="text-white">Este proyecto está basado en la API de The Movie Database</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainItems