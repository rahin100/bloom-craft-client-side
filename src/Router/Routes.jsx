import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../SignUp/SignUp";
import Services from "../Components/Navbar/Services";
import SingleServiceDetails from "../Pages/SingleServiceDetails/SingleServiceDetails";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
         loader:async () =>{
          const res = await fetch("https://bloom-craft-garden-server.vercel.app/allservices")
          const data = await res.json()
          return data;
        }
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      },
      {
        path: "my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
      },
      {
        path: "add-services",
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
      },
      {
        path: "my-schedules",
        element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
      },
      {
        path:"servicesDetails/:_id",
        element:<PrivateRoute><SingleServiceDetails></SingleServiceDetails></PrivateRoute>,
        loader:async () =>{
          const res = await fetch("https://bloom-craft-garden-server.vercel.app/allservices")
          const data = await res.json()
          return data;
        }
      }
    ],
  },
]);

export default router;
