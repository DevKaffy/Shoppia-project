import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/Signup';

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
 ]);

  return <RouterProvider router = {router} />
}


export default App
