import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Tracking from "./Tracking";
import Navbar from "./Navbar";
import Policy from "./Policy";

// import Policy from "./Conponent/Policy";
// import Footer from "./Conponent/Footer";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/Policy" element={<Policy/>}/>
          
          <Route path="/ContactUs" element={<ContactUs />} />

          {/* <Route path="/Policy" element={<Policy />} /> */}
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default Routing;
