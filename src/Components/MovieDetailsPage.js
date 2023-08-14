import React from "react";
import { useParams, Link } from "react-router-dom";
import initialMovies from "./Movies";
const MovieDetailsPage = () => {
  const { id, title, description } = useParams();
  let posterURL, trailerLink;

  initialMovies.forEach((element) => {
    if (
      element.id === id &&
      element.title === title &&
      element.description === description
    ) {
      posterURL = element.posterURL;
      trailerLink = element.trailerLink;
    }
  });
  if (posterURL && trailerLink) {
    return (
      <div>
        <div className="movie-item">
          <img src={`${posterURL}`} alt="" className="movie-poster" />

          <div className="movie-details">
            <h2 className="movie-title">{`${title}`}</h2>
            <p className="description">{`${description}`}</p>
            <div className="video-container">
              <iframe
                src={`${trailerLink}`}
                title={`${title} Trailer`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="button small">Back to Home</button>
        </Link>
      </div>
    );
  } else {
    return <div>not found</div>;
  }
};

export default MovieDetailsPage;
