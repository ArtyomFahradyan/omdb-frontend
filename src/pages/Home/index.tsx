import React from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { useSelector } from "react-redux";
import { MoviesSelectors } from "../../@redux";

function Home() {
  const movie = useSelector(MoviesSelectors.getMovies);

  return (
    <div style={{ margin: 20 }}>
      <SearchBar />
      {movie && <MovieCard />}
    </div>
  );
}

export default Home;
