import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'

const Routers = () => {
  return (
    <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
  )
}

export default Routers