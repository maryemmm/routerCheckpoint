import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "../Filter";
import AddMovie from "./AddMovie";
import initialMovies from "./Movies";
const HomePage = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  // to add the newMovie to the list
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
    );
  });
  // to display the movies after we filter by tite or rate
  return (
    <div>
      <Filter
        title={titleFilter}
        rate={ratingFilter}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

  export default HomePage;