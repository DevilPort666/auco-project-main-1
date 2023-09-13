import axios from "axios";

export const FetchMovies = async () => {
    const key = process.env.TMDB_API_KEY
    const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
      );
    return response.data.results;
};

export const FetchMovieDetails = async (id) => {
    const key = process.env.TMDB_API_KEY
    const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
      );
      return response.data;
};
   