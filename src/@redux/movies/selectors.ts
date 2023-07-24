import { createSelector } from "reselect";
import { MoviesStore } from "./types";

type State = { movies: MoviesStore };

const getMainState = (state: State) => state.movies;
const getMovies = createSelector(getMainState, (store) => store.movies);
export default {
  getMovies,
};
