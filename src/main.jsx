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
import AuthProvidor from './AuthProvidor.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute.jsx';

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
        element: <PrivateRoute><AddPlants /></PrivateRoute>
      },
      {
        path: "/my-plants",
        element: <PrivateRoute><MyPlants /></PrivateRoute>
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
    <AuthProvidor>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvidor>
  </StrictMode>,
)
