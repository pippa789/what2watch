import React, {useState} from 'react'
import { motion } from "framer-motion"
import Modal from 'react-modal'
import '../index.css'


 function MovieContainer({movie}) {
     const [modalOpen, setModalOpen] = useState(false)
    // const description = () => {
    //     Modal(movie.title + "     " +movie.overview)}
  return (
      <>
      <Modal isOpen={modalOpen}>
      <img src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path} alt="" />
      <p>{movie.overview}</p>
      <button onClick={() => setModalOpen(false)}>close</button>  
      </Modal>
    < motion.div className='movie-card'>
    <div>
    <h2>{movie.title}</h2>
    </div>
    <div>
     <img src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path} alt="" />
        <button onClick={()=> setModalOpen(true)}>Description</button>
    </div>
    </motion.div>
    </>
  )
}
export default MovieContainer