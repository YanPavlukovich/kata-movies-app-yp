import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=77bfcb429bad8df2a83551668ae3fb0d';

export const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
