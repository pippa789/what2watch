import './index.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/NavBar';
import About from './pages/about';
import MovieContainer from './components/MovieContainer';
import Filter from './components/Filter';
import { motion } from 'framer-motion';


//API Key: 809945612984fb6bf093bc390cd42fe4
//https://api.themoviedb.org/3/movie/popular?api_key=809945612984fb6bf093bc390cd42fe4

const Container = styled.div`
height: auto;
width: auto;
position: relative;
`

function App() {
 const [popular, setPopular] = useState([]);
 const [filtered, setFiltered] =useState([]);
 const [ activeGenre, setActiveGenre ] = useState(0);


useEffect (() => {
   fetchPopular()
 }, [])

const fetchPopular = async () => {
const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=809945612984fb6bf093bc390cd42fe4").then(function(response){
  if (response.ok) {
    return response.json();
} else {
    return Promise.reject(response);
}

}).then(function (data) {
  return fetch("https://api.themoviedb.org/3/movie/popular?api_key=809945612984fb6bf093bc390cd42fe4&page=2 " + data)
})

const movies = await data.json() 
setPopular(movies.results)
console.log(movies)
setFiltered(movies.results);
}



  return (
    <Container >

      <Router>
      <Navigation/>
        <Routes>
          <Route exact path = "/About" element = {<About/>} />
        </Routes>
      </Router>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className='popular-movies'>
       { filtered.map((movie) => {
         return <MovieContainer key={movie.id} movie={movie} />
       })}
      </motion.div>
      {/* <Modal /> */}
     </Container>
  );
}

export default App;

