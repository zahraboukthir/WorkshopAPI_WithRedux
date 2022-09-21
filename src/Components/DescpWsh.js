import React from "react";

const DescpWsh = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
       
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3> Using two apis with react and redux :</h3>
      <p>
        Recipe Search API:{" "}
        <a href="https://www.edamam.com/" target="_blank" rel="noreferrer">
          The Edamam - Food Database API, Nutrition API and Recipe API
        </a>{" "}
      </p>
      <p>
        TMDB API:{" "}
        <a
          href="https://developers.themoviedb.org/3"
          target="_blank"
          rel="noreferrer"
        >
          The Movie Database (TMDB) API
        </a>{" "}
      </p>
    </div>
  );
};

export default DescpWsh;
