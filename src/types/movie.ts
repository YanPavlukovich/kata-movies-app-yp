export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  genres: string[];
  vote_average: number;
  vote_count: number;
  overview: string;
};
