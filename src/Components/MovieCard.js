import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
//when the moviePoster is clicked the user is redirected to the movieDetailsPage
const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <div className="movie-item">
      <Link to={`/newpage/${id}/${title}/${description} `}>
        <img src={posterURL} alt={title} className="movie-poster" /> 
      </Link>
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
