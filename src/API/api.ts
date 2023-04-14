import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
