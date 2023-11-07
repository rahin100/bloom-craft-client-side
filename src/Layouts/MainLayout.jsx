import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="lg:mx-12">
            <Navbar></Navbar>
            <Outlet/>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;



