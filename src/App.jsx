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
import HomeAndLifestyle from './Components/HomeAndLifestyle/HomeAndLifestyle';
import Electronics from './Components/Electronics/Electronics';
import MyAccount from './Components/Pages/MyAccount';
import WomenFashion from './Components/WomenFashion';
import MenFashion from './Components/MenFashion';
import ProductDetail from './Components/Pages/ProductDetail';



const App = () => {
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
   },
   {
     path: "/:id",
     element: <ProductDetail />,
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
     path: "/myaccount",
     element: <MyAccount />,
   },
   {
     path: "/homeandlifestyle",
     element: <HomeAndLifestyle />,
   },
   {
     path: "/electronics",
     element: <Electronics />,
   },
   {
     path: "/womenfashion",
     element: <WomenFashion />,
   },
   {
     path: "/menfashion",
     element: <MenFashion />,
   },
   {
     path: "*",
     element: <Notfound />,
   },
 ]);

  return <RouterProvider router = {router} />
}


export default App
