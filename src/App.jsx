// import './App.css'
import { useState } from 'react'
import Hello from './components/Hello'
// import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NowPlaying from './pages/NowPlaying'
import CreateMovie from './pages/Create'
import Layout from './layout/Index'
import TopRatedMovie from './pages/TopRated'
import PopularMovie from './pages/Popular'
import Counter from './components/counter/Counter'
import DetailMovie from './pages/Detail'
import data from './utils/constans/data'
import MoviesContext from './components/context/MoviesContext'


function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = {movies, setMovies}
  return (
    <>
      {/* <Home /> */}
    <MoviesContext.Provider value={contextValue}>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/now" element={<NowPlaying />} />
        <Route path="/movie/top" element={<TopRatedMovie />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/movie/:id" element={<DetailMovie/>}></Route>
      </Routes>
    </Layout>
    </MoviesContext.Provider>

    </>
  )
}

export default App