import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import movies from "./movies/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    movies,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return { store };
};

export default configureStore;
