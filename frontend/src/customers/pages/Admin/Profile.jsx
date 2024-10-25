import {useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleGenreClick = ()=>{
    navigate("/profile/manage_genres")
  }

  const handleBooksClick = ()=>{
    navigate("/profile/manage_books")
  }
  return (
    <div className="min-h-screen bg-cover bg-center bg-opacity-50" style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/00/90/97/03/1000_F_90970368_jWglEgubEqsm5JOTeMQo7ftMk0bfEvSo.jpg')`}}>
      <h1 className="text-6xl text-center text-black mb-8 italic">Admin Page</h1>
      <div className="flex flex-col items-center justify-center h-screen">
  
      <div className="flex space-x-4">
          <button className="bg-red-900 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl italic"
          onClick={handleGenreClick}>
            Manage Genres
          </button>
          <button className="bg-red-900 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl italic"
          onClick={handleBooksClick}>
            Manage Books
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
