import axios from "axios";
import { useEffect, useState } from "react";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPublishedDate, setBookPublishedDate] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookUrl, setBookUrl] = useState("");
  const [bookGenreId, setBookGenreId] = useState("");
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data);
        console.log("books fetched : ", response.data);
      } catch (error) {
        console.error("error fetching books : ", error);
      }
    };
    fetchBooks();
  }, []);

  const handleViewBooks = () => {
    setShowBooks(true);
  };

  const handleAddBooks = async () => {
      try {
        if(!bookId || !bookName || !bookAuthor || !bookGenreId || !bookPublishedDate || !bookDescription || !bookUrl){
          alert("all fields required")
        }
        else{
          const response = await axios.post("http://localhost:8080/books", {
            book_id: bookId,
            book_name: bookName,
            book_author: bookAuthor,
            genre_id: bookGenreId,
            book_published_date: bookPublishedDate,
            book_description: bookDescription,
            book_url: bookUrl
        });

          setBooks([...books, response.data]);
          console.log("Book added:", response.data);
          setBookId('')
          setBookName('')
          setBookAuthor('')
          setBookGenreId('')
          setBookPublishedDate('')
          setBookDescription('')
          setBookUrl('')
          alert("book added")
        }
      }catch(error) {
        console.error("Error adding book:", error);
      }
        
    
    
  };

  const handleEditBooks = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/books/${bookId}`,
        {
          book_name: bookName,
          book_author: bookAuthor,
          genre_id: bookGenreId,
          book_published_date: bookPublishedDate,
          book_description: bookDescription,
          book_url: bookUrl,
        }
      );
      const updatedBooks = books.map((book) =>
        book.book_id === bookId ? response.data : book
      );
      setBooks(updatedBooks);
      console.log("Book edited:", response.data);
      alert("book updated")
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  const handleRemoveBooks = async () => {
    try {
      await axios.delete(`http://localhost:8080/books/${bookId}`);
      const updatedBooks = books.filter((book) => book.book_id !== bookId);
      setBooks(updatedBooks);
      console.log("Book removed:", bookId);
      alert("book removed")
    } catch (error) {
      console.error("Error removing book:", error);
    }
  };

  return (
    <div>
      <h2 className='text-4xl text-center mb-4 italic'>Manage Books</h2>

      

        <div className="flex justify-center mt-4">
          <div className="flex flex-col mr-4">
            <label htmlFor="bookId">Book Id</label>
            <input type="text" id="bookId" value={bookId} onChange={e => setBookId(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookName">Book Name</label>
            <input type="text" id="bookName" value={bookName} onChange={e => setBookName(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookAuthor">Book Author</label>
            <input type="text" id="bookAuthor" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookGenreId">Book Genre Id</label>
            <input type="text" id="bookGenreId" value={bookGenreId} onChange={e => setBookGenreId(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookPublishedDate">Book Published Date</label>
            <input type="text" id="bookPublishedDate" value={bookPublishedDate} onChange={e => setBookPublishedDate(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookDescription">Book Description</label>
            <input type="text" id="bookDescription" value={bookDescription} onChange={e => setBookDescription(e.target.value)} className="text-black" />
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="bookUrl">Book Url</label>
            <input type="text" id="bookUrl" value={bookUrl} onChange={e => setBookUrl(e.target.value)} className="text-black" />
          </div>
        </div>
      <div className="flex justify-center mt-4">
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={handleViewBooks}>View Books</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleAddBooks}>Add Book</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleEditBooks}>Edit Book</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleRemoveBooks}>Remove Book</button>
      </div>

      <br></br>
     
      {showBooks && (
          <div>
          <table className="w-full border border-collapse">
            <thead className="border p-2">
              <tr>
                <th className="border p-2 text-center">Id</th>
                <th className="border p-2 text-center">Name</th>
                <th className="border p-2 text-center">Author</th>
                <th className="border p-2 text-center">Published Date</th>
                <th className="border p-2 text-center">Description</th>
                
              </tr>
            </thead>
            <tbody >
              {books.map(book => (
                <tr key={book.book_id} className="border">
                  <td className="border p-2 text-center">{book.book_id}</td>
                  <td className="border p-2 text-center">{book.book_name}</td>
                  <td className="border p-2 text-center">{book.book_author}</td>
                  <td className="border p-2 text-center">{book.book_published_date}</td>
                  <td className="border p-2 text-center">{book.book_description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      )}

      
    </div>
  );
}

export default ManageBooks;
