import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Notfound from './Components/Pages/Notfound';
import SignUp from './Components/Pages/Signup';
import CheckOutPage from './Components/CheckOut/CheckOutPage'
import ProductUpload from './Components/ProductUpload/UploadPage';
import Test from './Components/Pages/UploadProduct/Test'


const App = () => {
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
   },
   {
     path: "/contact",
     element: <Contact />,
   },
   {
     path: "/about",
     element: <About />,
   },
   {
     path: "/signup",
     element: <SignUp />,
   },
   {
     path: "/login",
     element: <Login />,
   },
   {
    path: '/checkoutpage',
    component: <CheckOutPage />,
    element: <CheckOutPage />,
  
  },
  {
    path: '/productupload',
    component: <ProductUpload />,
    element: <ProductUpload />,
  },

  {
    path: "/test",
    element: <Test/>,
  },
  
   {
     path: "*",
     element: <Notfound />,
   },
 
 ]);

  return <RouterProvider router = {router} />
}


export default App
