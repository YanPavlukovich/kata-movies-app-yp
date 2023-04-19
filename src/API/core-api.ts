import { RequestOptions } from '../types/core';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = '77bfcb429bad8df2a83551668ae3fb0d';

export async function getResource(
  query: string,
  params: { [key: string]: string },
  options: RequestOptions = { method: 'GET' }
) {
  const url = createURL(query, params);
  const response = await fetch(url, options);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Error with MovieDB API');
  }
}

export function createURL(path: string, params: { [key: string]: string }) {
  const url = new URL(BASE_URL + path);

  Object.entries(params).forEach((param) => {
    url.searchParams.set(param[0], param[1]);
  });
  url.searchParams.set('api_key', TOKEN);

  return url;
}
