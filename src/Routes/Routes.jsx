import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import AddToy from "../Pages/AddToys/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/login', 
            element:<Login></Login>
        }, 
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        },
        {
          path: '/addtoy', 
          element: <AddToy></AddToy>
      },
      {
        path: '/mytoy', 
        element: <MyToys></MyToys>
    },
        {
          path: '/alltoy', 
          element:<AllToys></AllToys>
      },
      {
        path: '/blog', 
        element:<Blog></Blog>
    },
      {
        path: '/update/:id', 
        element:<Update></Update>,
        loader:({params})=> fetch(`http://localhost:5000/mytoy/${params.id}`),
    },
    // {
    //       path: 'bookings',
    //       element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
          
    //     }
      ]
    },
  ]);
  export default router;