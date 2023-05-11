import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Venues from '../pages/Venues'
import VenueID from '../pages/VenueID'

function Outlet() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='venues' element={<Venues/>}/>
    <Route path='venue/:id' element={<VenueID/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  )
}

export default Outlet

