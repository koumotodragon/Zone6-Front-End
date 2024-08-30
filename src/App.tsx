import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css'

import Layout from './pages/Layout';
import Error from './pages/Error';
import Home from './pages/Home';
import Video from './pages/Video';
import Terms from './pages/Terms';
import Search from './pages/Search';

import { loader as videoPageLoader } from './pages/Video';
import { loader as homePageLoader } from './pages/Home';
import { loader as searchPageLoader } from './pages/Search';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePageLoader,
      },
      {
        path: 'search',
        element: <Search />,
        loader: searchPageLoader,
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'video/:id',
        element: <Video />,
        loader: videoPageLoader,
      }
    ],
  },

]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
