import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Router'
import { useEffect } from 'react';
import { useAppSelector } from './redux/hooks';
import { selectCurrentUser } from './redux/authSlice';


function App() {
const currentUser = useAppSelector(selectCurrentUser)
  useEffect(() => {
    const handleUnload = () => {
      if (currentUser!) {
        localStorage.setItem('user', JSON.stringify(currentUser));
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [currentUser]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
