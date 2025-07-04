import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/UI/button/Index";
import StyledDetailMovie from "../components/UI/button/DetailMovie.styled";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }
    getDetailMovie();
  }, []);
  return (
    <>
      {/* <h2>Detail Movie ID:{Params.id} </h2> */}
      <StyledDetailMovie>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <Button>Watch</Button>
      </div>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;
