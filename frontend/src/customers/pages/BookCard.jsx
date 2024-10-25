/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const bookId = book.book_id; // Assuming book_id is correct in your data

  return (
    <div>
      <div className="w-64 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`/books/${bookId}`}>
          <img src={book.book_url} alt={book.book_name} className="h-50 w-full object-cover rounded-t-lg" />
          <div className="px-4 py-3">
            <p className="text-lg font-bold text-black truncate block capitalize">{book.book_name}</p>
            <div className="flex items-center">
              <p className="text-sm font-semibold text-black cursor-auto my-2"> By {book.book_author}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;