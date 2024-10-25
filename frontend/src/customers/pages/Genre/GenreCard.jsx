/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useGenre } from "../../context/genreContext";

const GenreCard = ({ genre }) => {
  const { setSelectedGenre } = useGenre();
  return (
    <div className="relative w-60 h-60 overflow-hidden rounded-3xl m-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${genre.genre_url})` }}
      ></div>

      <Link
        to={`/genres/${genre.genre_name}`}
        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 transition-opacity opacity-0 hover:opacity-100"
        onClick={() => setSelectedGenre(genre.genre_id)}
      >
        <h1 className="text-3xl text-white italic">{genre.genre_name}</h1>
      </Link>
    </div>
  );
};

export default GenreCard;