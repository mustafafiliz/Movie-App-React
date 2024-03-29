import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = vote => {
  if (vote >= 8) {
    return "vote--success";
  } else if (vote >= 6) {
    return "vote--warning";
  } else {
    return "vote--danger";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie__info">
        <h3>{title}</h3>
        <span className={`vote ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie__over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
