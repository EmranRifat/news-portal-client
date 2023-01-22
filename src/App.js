import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Catagory from "./Components/Catagory/Catagory";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import News from "./Components/News/News";
import Main from "./Layout/Main";
import PrivateRoute from "./Route/PrivateRoute";

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
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
