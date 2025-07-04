import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import AddMovieForm from "../components/addMovie/AddMovie";

function CreateMovie(){
    return(
        <>
        {/* <Navbar /> */}
            <Hero />
            <AddMovieForm />
        {/* <Footer /> */}
        </>
    )
}

export default CreateMovie;