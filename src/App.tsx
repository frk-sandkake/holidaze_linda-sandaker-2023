import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Router'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { AuthUser } from './redux/types';
import { setUser } from './redux/authSlice';


function App() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user: AuthUser = JSON.parse(userJson);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  useEffect(() => {
    const handleUnload = () => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [user]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
