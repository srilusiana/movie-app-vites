// import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;