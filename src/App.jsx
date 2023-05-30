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
     path: "*",
     element: <Notfound />,
   },
 
 ]);

  return <RouterProvider router = {router} />
}


export default App
