import { useContext, useState } from "react";
import Alert from "../alert/Alert";
import styles from "./AddMovie.module.css";
import Movies from "../movies/Movies";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../context/MoviesContext";

function AddMovieForm() {
  // const { movies, setMovies } = props;

  const {movies, setMovies} = useContext(MoviesContext);
  const navigation = useNavigate();
  // menggunakan object untuk form data
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    nama: "", // untuk menambah field baru
  });

  // mengubah satu state object untuk semua error
  const [error, setError] = useState({
    title: false,
    date: false,
    nama: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    const newError = {
      title: formData.title.trim() === "",
      date: formData.date.trim() === "",
      nama: formData.nama.trim() === "",
    };

    setError(newError);

    return !Object.values(newError).includes(true);
  }

  function addMovie() {
    const movie = {
      id: crypto.randomUUID(),
      title: formData.title,
      year: formData.date,
      nama: formData.nama,
      type: "Movie",
      poster: "https://picsum.photos/500/750?grayscale",
    };

    setMovies([...movies, movie]);

    setFormData({ title: "", date: "", nama: "" });
    setError({ title: false, date: false, nama: false });
    navigation("/");
  }

  function handleSubmit(e) {
    // if(title === ""){
    //     setIsTitleError(true);
    // }
    // else if (date === ""){
    //     setIsDateError(true);
    // } else {
    e.preventDefault();
    validate() && addMovie();
    // const movie = {
    // id: "xyz", title: title,
    // year: date, type: "Movie",
    // poster: "https://picsum.photos/200/300?grayscale"
    // };
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          id="title"
          type="text"
          value={formData.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        {error.title && <Alert>Title wajib diisi</Alert>}

        <input
          className={styles.input_form}
          id="date"
          type="text"
          value={formData.date}
          name="date"
          placeholder="Year"
          onChange={handleChange}
        />
        {error.date && <Alert>Year wajib diisi</Alert>}

        <input
          className={styles.input_form}
          id="nama"
          type="text"
          value={formData.nama}
          name="nama"
          placeholder="Nama"
          onChange={handleChange}
        />
        {error.nama && <Alert>Nama wajib diisi</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
