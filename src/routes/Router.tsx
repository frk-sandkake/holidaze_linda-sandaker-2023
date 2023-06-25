import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Venues from "../pages/venues/Venues"
import {VenueID} from '../pages/venues/VenueID'
import Traveller from '../pages/profile/Traveller'
import Host from '../pages/Host'
import SignUp from '../pages/signup-login/Signup'
import Login from '../pages/signup-login/Login'
import Profile from '../pages/profile/Profile'
import Error from '../auth-error-handlers/Error'
import ErrorBoundary from '../auth-error-handlers/ErrorBoundary'
import {AuthRequired} from '../auth-error-handlers/AuthRequired'
import { AuthLayout } from '../pages/signup-login/AuthLayout'
import About from '../pages/About'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>

      <Route element={<AuthLayout />}>
        <Route path='signup' element={<SignUp />}/>
        <Route
          path='login'
          element={<Login />}
          errorElement={<Error />}
        />
      </Route>
      <Route
        path='venues'
        element={<Venues />}
        errorElement={<Error />}
      />
      <Route
        path='venues/:id'
        element={<VenueID />}
        errorElement={<Error />}
      />

      <Route element={<AuthRequired />}>
        <Route
          path='profile'
          element={<Profile />}
          errorElement={<Error />}
        />
        <Route path='traveller' element={<Traveller />} />
        <Route
          path='host'
          element={<Host />}
          errorElement={<Error />}
        />
      </Route>

      <Route path='*' element={
        <ErrorBoundary errorElement={<Error />}>
          <NotFound />
        </ErrorBoundary>
      }
      />
    </Route>
  ))

export default router

