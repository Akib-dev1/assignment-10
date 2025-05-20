import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Home.jsx';
import AllPlants from './AllPlants.jsx';
import AddPlants from './AddPlants.jsx';
import MyPlants from './MyPlants.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "/all-plants",
        element: <AllPlants />
      },
      {
        path: "/add-plants",
        element: <AddPlants />
      },
      {
        path: "/my-plants",
        element: <MyPlants />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
