import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt=useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {
        showGpt? (
          <GptSearch />
        ) : 
        <> 
          <MainContainer />
          <SecondaryContainer />
        </>
      }
     
      {/*
          MainContainer
            - Video Background
            - Video Title
          SecondaryContainer
            - MovieList * n
              - cards * n
        */}
    </div>
  )
}

export default Browse;