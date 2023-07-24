import { Movie } from "types";

export default {
  SET_MOVIES: "SET_MOVIES",
  SET_SEARCH: "SET_SEARCH",
  CLEAR: "CLEAR",
};

export type MoviesStore = {
  movies: Movie | null;
};
