import { Movie } from '../types/movies';

const API_KEY = '77bfcb429bad8df2a83551668ae3fb0d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesApi = async (searchQuery: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
