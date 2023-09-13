export const FetchMovies = async () => {
  try {
    const key = process.env.TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const FetchMovieDetails = async (id) => {
  try {
    const key = process.env.TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
   