import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import ENDPOINT from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function TopRatedMovie() {
  const {setMovies} = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovie() {
      // const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
      const response = await axios(ENDPOINT.TOPRATED);
      setMovies(response.data.results);
    }

    fetchTopRatedMovie();
  }, []);

    return (
      <>
        <Hero />
        <Movies title="TopRated Movies" /> 
      </>
    );
  }
  
  export default TopRatedMovie;
