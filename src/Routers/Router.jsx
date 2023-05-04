import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Home/Chef/Chef";
import Contact from "../Pages/Home/Contact/Contact";
import About from "../Pages/Home/About/About";
import Menu from "../Pages/Home/Menu/Menu";
import Blogs from "../Pages/Home/Blogs/Blogs";
import SingleChef from "../Pages/Home/SingleChef/SingleChef";
import Login from "../Pages/Home/Auth/Login";
import Register from "../Pages/Home/Auth/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/chefs',
            element:<Chef></Chef>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/chefDetails/:id',
          element:<PrivetRoute><SingleChef></SingleChef></PrivetRoute>,
          loader:({params}) => fetch(`https://bengali-chef-server-site-rakibislam2233.vercel.app/chefDetails/${params.id}`)
        }
      ]
    },
  ]);
export default router;
