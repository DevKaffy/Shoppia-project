import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Notfound from './Components/Pages/Notfound';
import SignUp from './Components/Pages/Signup';
import CheckOutPage from './Components/CheckOut/CheckOutPage';
import ProductUpload from './Components/ProductUpload/UploadPage';
import index from './Components/ViewOrders/ViewOrdersPage';
import HomeAndLifestyle from './Components/HomeAndLifestyle/HomeAndLifestyle';
import Electronics from './Components/Electronics/Electronics';



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
     path: "/checkoutpage",
     element: <CheckOutPage />,
   },
   {
     path: "/productupload",
     element: <ProductUpload />,
   },
   {
     path: "/homeandlifestyle",
     element: <HomeAndLifestyle />,
   },

   {
     path: "/electronics",
     element: <Electronics/>,
   },
   {
     path: "*",
     element: <Notfound />,
   },
 ]);

  return <RouterProvider router = {router} />
}


export default App
