import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch} from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();

    const getMovieTrailers=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);
        const json= await data.json();
        const multipleTrailers=json.results.filter(video => video.type==="Trailer");
        const trailer=multipleTrailers.length ? multipleTrailers[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        getMovieTrailers();
    },[]);
}

export default useMovieTrailer