import { StrictMode, Suspense } from 'react'
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
import PlantDetails from './PlantDetails.jsx';
import 'react-tooltip/dist/react-tooltip.css';
import Error from './Error.jsx';
import Upadate from './Upadate.jsx';


const plantsData=fetch("https://b11a10-server-side-akib-dev1.vercel.app/plants").then(res=>res.json());

const plantsDataSortCare=fetch("https://b11a10-server-side-akib-dev1.vercel.app/plants/sortCare").then(res=>res.json());

const plantsDataSortNext=fetch("https://b11a10-server-side-akib-dev1.vercel.app/plants/sortNext").then(res=>res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        path: "/",
        element: <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>}>
          <Home plantsData={plantsData}/>
        </Suspense>
      },
      {
        path: "/all-plants",
        element: <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>}><AllPlants plantsDataSortCare={plantsDataSortCare} plantsDataSortNext={plantsDataSortNext} plantsData={plantsData}/></Suspense>,
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
        path: "all-plants/:id",
        errorElement: <Error />,
        element: <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>}><PrivateRoute><PlantDetails plantsData={plantsData}/></PrivateRoute></Suspense>,
      },
      {
        path: "/my-plants/update/:id",
        element: <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>}><PrivateRoute><Upadate plantsData={plantsData} /></PrivateRoute></Suspense>,
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
