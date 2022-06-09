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
      <Modal className='modal' isOpen={modalOpen}>
      <img src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path} alt="" />
      <p>{movie.overview}</p>
      <motion.button
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        whileTap={{ scale: 0.9 }} 
        onClick={() => setModalOpen(false)}
      >close</motion.button>  
      </Modal>
    < motion.div className='movie-card'>
    <div>
    <h2>{movie.title}</h2>
    </div>
    <div>
     <img src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path} alt="" />
        <motion.button 
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        whileTap={{ scale: 0.9 }} 
        onClick={()=> setModalOpen(true)}>Description</motion.button>
    </div>
    </motion.div>
    </>
  )
}
export default MovieContainer