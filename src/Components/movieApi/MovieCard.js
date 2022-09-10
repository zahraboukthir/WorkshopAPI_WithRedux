import React from "react";
import "./cardm.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>

            <div className="card__header-text">
              <h3 className="card__title">{movie.title}</h3>
              <span className="card__status">{movie.release_date}</span>
            </div>
          </div>
          <div className="card__description">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
