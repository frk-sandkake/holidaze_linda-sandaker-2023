import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Venues from '../pages/Venues'
import VenueID from '../pages/VenueID'
import SearchResults from '../components/SearchResults'

function Router() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='venues' element={<Venues />}/>
      <Route path='venue/:id' element={<VenueID />}/>
      <Route path="/search/:searchTerm"element={<SearchResults/>}
  />
    </Route>
    <Route path='*' element={<NotFound />}/>
   </Routes>
   </>
  )
}

export default Router

