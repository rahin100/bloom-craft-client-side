import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Service from "../Components/Navbar/Service";
import Login from "../Pages/Login/Login";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"service",
          element:<Service></Service>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"my-services",
          element:<MyServices></MyServices>
        },
        {
          path:"add-services",
          element:<AddServices></AddServices>
        },
        {
          path:"my-schedules",
          element:<MySchedules></MySchedules>
        },

      ]
    },
]);

export default router