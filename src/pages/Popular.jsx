import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import { useContext, useEffect } from "react";
import axios from "axios";
import ENDPOINT from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function Popular() {
  // const [movies, setMovies] = useState([]);
  const {setMovies} = useContext(MoviesContext);

  useEffect(function() {
    async function fetchPopularMovie() {
      // const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      // const response = await axios.get(URL);
      const response = await axios(ENDPOINT.POPULAR)
      setMovies(response.data.results);
    }
    fetchPopularMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default Popular;
