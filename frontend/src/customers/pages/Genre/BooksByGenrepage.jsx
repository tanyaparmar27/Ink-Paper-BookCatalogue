import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookCard from './../BookCard'; 
import { useGenre } from '../../context/genreContext';

const BooksByGenrePage = () => {
  const { genreName } = useParams();
  const [books, setBooks] = useState([]);

  const { selectedGenre } = useGenre();


  useEffect(() => {
    const fetchBooksByGenre = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/genres/books/${selectedGenre}`);
        console.log(response)
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books by genre:', error);
      }
    };

    fetchBooksByGenre();
  }, []);

  return (
    <div className='bg-[url("https://cdn.cbeditz.com/cbeditz/large/dark-brown-wood-wooden-background-free-wallpaper-zdu3w.jpg")]'>
      <h2 className='text-4xl font-sans text-center sticky top-0 z-10'>Books in {genreName}</h2>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {books.map(book => (
          <BookCard key={book.book_id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksByGenrePage;