import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'login', 
            element:<Login></Login>
        }, 
        {
            path: 'signup', 
            element: <SignUp></SignUp>
        },
    //     {
    //       path: 'about', 
    //       element:<About></About>
    //   },
    //   {
    //     path: 'checkout/:id', 
    //     element:<CheckOut></CheckOut>,
    //     loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`),
    // },
    // {
    //       path: 'bookings',
    //       element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
          
    //     }
      ]
    },
  ]);
  export default router;