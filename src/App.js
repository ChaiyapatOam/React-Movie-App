import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

const API = "http://www.omdbapi.com/?apikey=8fab4333";

function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const Searchmovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };
  useEffect(() => {
    Searchmovies("Superman");
  },[]);
  return (
    <div className="App">
      <h1>Movie Box</h1>
      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img src={SearchIcon} alt="search" onClick={() => Searchmovies(searchTerm)}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie ={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No Movie found</h3>
        </div>
      )}
      {/* <div className="container">
        <MovieCard movie1={movie1} />
      </div> */}
    </div>
  );
}

export default App;
