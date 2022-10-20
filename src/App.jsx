import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import logo from "./images/logo.svg";
import image from "./images/illustration-dashboard.png";

function App() {
    const mainLogo = logo;
    const dashboardImage = image;
    return (
        <>
            <Main logo={mainLogo} mainImage={dashboardImage} />
            <Footer />
        </>
    );
}

export default App;
