import axios from 'axios';

const API_KEY = '77bfcb429bad8df2a83551668ae3fb0d';

export const getMovies = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return`);
  return response.data.results;
};
