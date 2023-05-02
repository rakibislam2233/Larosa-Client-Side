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
import Gallery from "../Pages/Home/Gallery/Gallery";
import Blogs from "../Pages/Home/Blogs/Blogs";
import SingleChef from "../Pages/Home/SingleChef/SingleChef";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
            path:'/gallery',
            element:<Gallery></Gallery>
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
          path:'/chefDetails/:id',
          element:<SingleChef></SingleChef>,
          loader:({params}) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
        }
      ]
    },
  ]);
export default router;
