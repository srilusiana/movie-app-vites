// import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Movies from "../components/movies/Movies"
import Counter from "../components/Counter";
import AddMovie from "../components/addMovie/AddMovie";
// import data from '../utils/constans/data';
import Button from "../components/UI/button/Index";



function Home() {

    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data);
    return(
        <div>
            {/* <Navbar /> */}
            <main>
                <Hero />
                {/* <Button variant="primary">Lihat</Button>
                <Button variant="secondary" full>Lihat</Button> */}
                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies />
                {/* <AddMovie movies={movies} setMovies={setMovies} /> */}
                {/* <Counter /> */}
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;