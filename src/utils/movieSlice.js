import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action)=> {
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo=action.payload;
        },
        addPopular: (state,action)=> {
            state.popularMovies=action.payload;
        },
    },
})

export const {addNowPlayingMovies,addTrailerVideo,addPopular}=movieSlice.actions;
export default movieSlice.reducer;