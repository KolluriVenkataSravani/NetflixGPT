import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const getPopularMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addPopular(json.results));
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies;