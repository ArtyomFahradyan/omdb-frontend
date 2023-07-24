import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, Movie } from "types";
import types from "./types";

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  const setMovies = useCallback(
    (payload: Movie | null) => {
      dispatch({ type: types.SET_MOVIES, payload });
    },
    [dispatch]
  );

  const clear = useCallback(() => {
    dispatch({ type: types.CLEAR });
  }, [dispatch]);

  return {
    setMovies,
    clear,
  };
}
