import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Catagory from "./Components/Catagory/Catagory";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import News from "./Components/News/News";
import Main from "./Layout/Main";
import PrivateRoute from "./Route/PrivateRoute";
import LoginLayout from "./Layout/LoginLayout";
import Terms from "./Shared/Terms/Terms";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://news-portal-server-lyart.vercel.app/news"),
        },
        {
          path: "/category/:id",
          element: <Catagory></Catagory>,
          loader: ({ params }) =>
            fetch(
              `https://news-portal-server-lyart.vercel.app/category/${params.id}`
            ),
        },
        {
          path: "/news/:id",
          element: (
            <PrivateRoute>
              <News></News>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://news-portal-server-lyart.vercel.app/news/${params.id}`
            ),
        },
      
      ],
      
    },
   
{
  path:"/",
  element:<LoginLayout></LoginLayout>,
  children:[
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/terms",
      element: <Terms></Terms>,
    },

  ]
}





  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
