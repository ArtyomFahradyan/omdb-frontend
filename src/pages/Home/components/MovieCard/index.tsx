import React from "react";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { MoviesSelectors } from "@redux";
import { Wrapper, Content } from "./styles";

function MovieCard() {
  const movie = useSelector(MoviesSelectors.getMovies);

  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={movie?.Poster} />
          <Content>
            <Typography gutterBottom variant="h5" component="div">
              {movie?.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {movie?.Year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Actors: {movie?.Actors}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Awards: {movie?.Awards}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {movie?.Plot}
            </Typography>
          </Content>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}

export default MovieCard;
