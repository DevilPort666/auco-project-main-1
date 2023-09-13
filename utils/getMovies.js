import axios from "axios";

export const FetchMovies = async () => {
  try {
    const key = process.env.TMDB_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const FetchMovieDetails = async (id) => {
  try {
    const key = process.env.TMDB_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
   