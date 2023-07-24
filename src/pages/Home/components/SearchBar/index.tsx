import React, { ChangeEvent, useState } from "react";
import { Grid, MenuItem, Button, Typography } from "@mui/material";
import { useMoviesActions } from "@redux";
import Spinner from "components/Spinner";
import { Input, StyledSelect } from "./styles";

function SearchBar() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("movie");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setMovies } = useMoviesActions();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  // eslint-disable-next-line
  const handleTypeChange = (e: any) => {
    setType(e.target.value as string);
  };
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleSearch = async () => {
    setNotFound(false);
    setMovies(null);
    setIsLoading(true);
    const res = await fetch(
      `http://localhost:5001/movies?title=${title}&type=${type}&year=${year}`
    );
    const data = await res.json();
    if (data.data?.Error?.includes("not found!")) {
      setNotFound(true);
    } else {
      setMovies(data.data);
    }
    setIsLoading(false);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const handleClear = () => {
    setYear("");
    setTitle("");
    setType("");
    setMovies(null);
    setNotFound(false);
  };

  return (
    <div style={{ margin: 20 }}>
      <Grid container spacing={2}>
        <Grid item sm={4} md={4}>
          <Input
            value={title}
            label="Title"
            onChange={handleTitleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item sm={2} md={2}>
          <Input
            value={year}
            type="number"
            onChange={handleYearChange}
            label="Year"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={2} md={2}>
          <StyledSelect value={type} label="Type" onChange={handleTypeChange}>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="episode">Episode</MenuItem>
          </StyledSelect>
        </Grid>
        <Grid item sm={2} md={2}>
          <Button onClick={handleSearch} variant="contained">
            Search
          </Button>
        </Grid>
        <Grid item sm={2} md={2}>
          <Button onClick={handleClear} variant="outlined">
            Clear
          </Button>
        </Grid>
      </Grid>
      {isLoading && <Spinner />}
      {notFound && (
        <Typography gutterBottom variant="h5" component="div">
          Not found!
        </Typography>
      )}
    </div>
  );
}

export default SearchBar;
