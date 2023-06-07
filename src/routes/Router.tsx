import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Venues from '../pages/Venues'
import VenueID from '../pages/VenueID'
import Traveller from '../pages/Traveller'
import Host from '../pages/Host'
import SignUp from '../pages/Signup'
import LogIn from '../pages/Login'
import Profile from '../pages/Profile'
import Error from '../components/Error'
import ErrorBoundary from '../components/ErrorBoundary'
import AuthRequired from './AuthRequired'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='venues' element={<Venues />} />
      <Route path='venue/:id' element={<VenueID />}/>
      <Route element={<AuthRequired />}>
        <Route path='profile' element={<Profile />}/>
        <Route path='traveller' element={<Traveller />} />
        <Route path='host' element={<Host />} />
      </Route>
      <Route path='signup' element={<SignUp />}/>
      <Route path='login' element={<LogIn />}/>
      <Route path='*' element={
        <ErrorBoundary errorElement={<Error />}>
          <NotFound />
        </ErrorBoundary>
      }/>
    </Route>
  ))

export default router

