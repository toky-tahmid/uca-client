import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import CountriesDetails from "../Layout/Countries/CountriesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/Public.json')
      },
      {
        path: "/countriesDetails/:id",
        element: <CountriesDetails></CountriesDetails>,
        loader:()=>fetch('/Public.json')
      }
      
    ],
  },
]);

export default router;
