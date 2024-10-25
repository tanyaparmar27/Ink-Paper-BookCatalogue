import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MainBookCard = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleStatusChange = async (event) => {
    const status = event.target.value;
    setNewStatus(status);
    if(status=='none'){
      try{
        await axios.patch(`http://localhost:8080/books/${bookId}`, { book_status: '' })
        alert('book status removed')
      }catch(error){
        console.error('error removing book status')
      }
    }else{
      try {
        await axios.patch(`http://localhost:8080/books/${bookId}`, { book_status: status });
        alert(`Book status successfully updated to ${status}`);
      } catch (error) {
        console.error('Error updating book status:', error);
        alert('Failed to update book status. Please try again.');
      }
    }
    
  };

  return (
    <div className="bg-gray-200 p-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-3">
          <div className="md:flex-1 px-2">
            <img src={book?.book_url} alt={book?.book_name} className="h-96 w-auto rounded-lg object-cover bg-gray-300 dark:bg-white mb-4 p-2" />
            
            <div>
              <select
                value={newStatus}
                onChange={handleStatusChange}
                className="ml-2 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <option value="want_to_read">Want to read</option>
                <option value="currently_reading">Currently reading</option>
                <option value="already_read">Already read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          
          <div className="md:flex-1 px-3">
            <h2 className="text-4xl font-bold text-orange-800 dark:text-orange-500 mb-2">{book?.book_name}</h2>
            <p className="text-1xl font-bold text-orange-600 dark:text-orange-500 mb-2">by {book?.book_author}</p>
            
            <br />
            <div>
              <span className="font-bold text-orange-800 dark:text-orange-500">Book Description</span>
              <p className="text-md text-orange-600 dark:text-orange-400 mt-2">
                {book?.book_description}
              </p>
              <br />
              <div className="flex items-center">
                <span className="font-bold text-md text-orange-800 dark:text-orange-500">Published on:<br />{book?.book_published_date}</span>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBookCard;