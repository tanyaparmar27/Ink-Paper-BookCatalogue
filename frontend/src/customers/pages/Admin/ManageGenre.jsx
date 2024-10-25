import  { useState, useEffect } from 'react';
import axios from 'axios';

const ManageGenres = () => {
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState('')
  const [genreName, setGenreName] = useState('')
  const [genreUrl, setGenreUrl] = useState('')
  const [showTable, setShowTable] = useState(false)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8080/genres');
        setGenres(response.data);
        console.log("genre data : ",response.data)
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  const handleViewGenre = ()=>{
    setShowTable(true)
  }

  const handleAddGenre = async ()=>{
    try{
      if (!genreId || !genreName || !genreUrl) {
        alert("All fields are required.");
      }else{
        const response = await axios.post('http://localhost:8080/genres', {
          genre_id: genreId,
          genre_name: genreName,
          genre_url: genreUrl
        });
        setGenres([...genres, response.data])
        setGenreId('')
        setGenreName('')
        setGenreUrl('')
        alert("genre added")
          console.log("genre added")
        }
    }catch(error){
      console.error(`error in adding genre : ${error}`)
    }
  }

  const handleEditGenre = async()=>{
    try{
      if((genreId && genreName) ||( genreId && genreUrl)){
        const response = await axios.patch(`http://localhost:8080/genres/${genreId}`, {
          genre_url: genreUrl,
          genre_name : genreName
        });
        console.log("genre edited : ",response.data)

        const updatedGenre = genres.map(genre=>{
          if(genre.genre_id == genreId){
            return{
              ...genre,
              genre_url:genreUrl,
              genre_name:genreName
            }
          }
          return genre;
        })
        setGenres(updatedGenre)
        alert("genre updated")
        setGenreId('')
        setGenreName('')
        setGenreUrl('')
      }
      else{
        alert("field missing")
      }
    }
    catch(error){
      console.error(`error in editing genre : ${error}`)
    }
  }

  const handleRemoveGenre =async ()=>{
    try{
      if(!genreId){
        alert("genre id required for deleting")
      }
      else{
        const response = axios.delete(`http://localhost:8080/genres/${genreId}`)
        console.log("genre deleted : ",response.data)
        const updatedGenres = genres.filter(genre=>genre.genre_id != genreId)
        setGenres(updatedGenres)
        setGenreId('')
        setGenreName('')
        setGenreUrl('')
        alert("genre deleted")
      }
    }
    catch(error){
      console.error(`error in deleting genre : ${error}`)
    }
  }
  

  return (
    <div>
      <h2 className='text-4xl text-center mb-4 italic'>Manage Genres</h2>

      

        <div className="flex justify-center mt-4">
        <div className="flex flex-col mr-4">
          <label htmlFor="genreId">Genre ID:</label>
          <input type="text" id="genreId" value={genreId} onChange={e => setGenreId(e.target.value)} className="text-black" />
        </div>
        <div className="flex flex-col mr-4">
          <label htmlFor="genreName">Genre Name:</label>
          <input type="text" id="genreName" value={genreName} onChange={e => setGenreName(e.target.value)} className="text-black" />
        </div>
        <div className="flex flex-col mr-4">
          <label htmlFor="genreUrl">Genre URL:</label>
          <input type="text" id="genreUrl" value={genreUrl} onChange={e => setGenreUrl(e.target.value)} className="text-black" />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={handleViewGenre}>View Genres</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleAddGenre}>Add Genre</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleEditGenre}>Edit Genre</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleRemoveGenre}>Remove Genre</button>
      </div>

      <br></br>
     
      {showTable && (
          <div>
          <table className="w-full border border-collapse">
            <thead className="border p-2">
              <tr>
                <th className="border p-2 text-center">Genre ID</th>
                <th className="border p-2 text-center">Genre Name</th>
                
              </tr>
            </thead>
            <tbody >
              {genres.map(genre => (
                <tr key={genre.genre_id} className="border">
                  <td className="border p-2 text-center">{genre.genre_id}</td>
                  <td className="border p-2 text-center">{genre.genre_name}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      )}

      
    </div>
  );
};

export default ManageGenres;


