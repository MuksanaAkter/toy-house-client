import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar";
import Footer from "../Pages/Shared/Footer";
import { ToastContainer } from "react-toastify";



const Main = () => {
    return (
        <div>
            
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ToastContainer/>
            <Footer></Footer>
        </div>
    );
};

export default Main;