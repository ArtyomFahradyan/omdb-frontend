import { Payload } from "types";
import { cloneDeep } from "lodash";
import types, { MoviesStore } from "./types";

export const initialValues: MoviesStore = {
  movies: null,
};

export default function (
  state: MoviesStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    case types.CLEAR:
      return cloneDeep(initialValues);

    default:
      return state;
  }
}
