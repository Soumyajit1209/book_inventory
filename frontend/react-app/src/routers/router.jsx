import {
    createBrowserRouter,
    RouterProvider,
    useParams,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
         {
          path: '/Home',
          element: <Home/>
         },
         {
          path: "/shop",
      element: <Shop/>,
         },
         {
          path: "/about",
          element: <About/>,
         },
         {
          path: "/blog",
          element: <Blog/>,
         }, 
         {
          ppath: "/book/:id",
          element: <SingleBook/>,
          loader:({params}) => fetch(``)
         }
      ]
    },
    {
      path:"/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>

        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader :({params}) => fetch (``)
        }
      ]
    },
    {
      path: "sign-up",
      element:<Signup/>
    },
    {
      path:"login",
      element: <Login/>
    },
    {
      path:"logout",
      element: <Logout/>
    }
  ]);


  export default router;
  