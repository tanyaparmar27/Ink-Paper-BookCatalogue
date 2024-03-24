/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import GenreCard from './GenreCard'
import axios from "axios"
import { useGenre } from "../../context/genreContext"

const GenresPage = () => {
  
  const [genres,setGenre]=useState([])
  const { selectedGenre } = useGenre();

  console.log(selectedGenre)

  //fetching from backend on mounting
  useEffect(()=>{
    loadGenres();
  },[]);

  //fetching genres from backend
  const loadGenres = async() =>{
    const result = await axios.get("http://localhost:8080/genres")  
    setGenre(result.data)
  }


  return (
    <div className='' style={{ backgroundImage: `url('')` }}>
      <h2 className="text-5xl  mb-4 mx-auto "><center>Genres</center></h2>
      <div className="grid grid-cols-3 gap-3 ">
        {genres.map(genre => (
          <div key={genre.genre_id} >
            <GenreCard genre={genre} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenresPage
