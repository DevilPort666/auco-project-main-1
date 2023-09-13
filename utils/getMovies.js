export const FetchMovies = async () => {
    const key = process.env.TMDB_API_KEY
    return fetch(
     `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=es`
    )
     .then((res) => res.json())
     .then((data) => data.results);
};
   