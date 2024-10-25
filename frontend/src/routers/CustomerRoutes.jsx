import { Route , Routes} from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Navbar from '../customers/components/NavBar/Navbar'
import GenresPage from '../customers/pages/Genre/GenresPage'
import BooksByGenrePage from '../customers/pages/Genre/BooksByGenrepage'
import MainBookCard from '../customers/pages/MainBookCard'
import Profile from '../customers/pages/Admin/Profile'
import MyLibrary from '../customers/pages/MyLibrary'
import ManageGenre from '../customers/pages/Admin/ManageGenre'
import ManageBooks from '../customers/pages/Admin/ManageBooks'

const CustomerRoutes = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>

      <div>
        <Routes>
          <Route path='/*' element={<HomePage/>}></Route>
          <Route path='/genres' element={<GenresPage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/genres/:genreName' element={<BooksByGenrePage />} />
          <Route path='/books/:bookId' element={<MainBookCard/>}></Route>
          <Route path='/:statusName' element={<MyLibrary/>}></Route>
          <Route path='/profile/manage_genres' element={<ManageGenre/>}></Route>
          <Route path='/profile/manage_books' element={<ManageBooks/>}></Route>
        </Routes>
      </div>
    </div>
    
  )
}

export default CustomerRoutes