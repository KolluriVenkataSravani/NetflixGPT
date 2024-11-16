import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-72 pl-12 relative z-20">
        {/*
      MovieList - Popular, Trending, Now Playing etc.
        movieCards * n
      */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;