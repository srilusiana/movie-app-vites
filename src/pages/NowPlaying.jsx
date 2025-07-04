import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import ENDPOINT from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function NowPlaying() {
  const {setMovies} = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      // const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
      const response = await axios(ENDPOINT.NOWPLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovie();
  }, []);

  return (
    <>
        <Hero />
        <Movies title="NowPlaying Movies" />
    </>
  );
}

export default NowPlaying;
