import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const FEAUTURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(FEAUTURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = e => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app__container">
      <header className="header">
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="header__input"
            placeholder="search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <h1 class="app__title">Movie App</h1>
      {movies.length > 0 &&
        movies.map(movie => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}
export default App;
