import React, { useImperativeHandle, useRef } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Snackbar from "./components/snackbar/Snackbar.jsx";

// I wanted to give the opportunity to add error message in the future
// Right now Im just using the success message however
const SnackbarType = {
  success: "success",
  fail: "fail"
}

const App = () => {
  
  // I am using "useRef" so we can call the function "Show" inside the "Snackbar" component
  const snackbarRef = useRef(null);
    
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Snackbar 
        ref={snackbarRef}
        message="Email sent successfully" type={SnackbarType.success}/>
        <button onClick={() => {
          snackbarRef.current.Show()
        }}>Test</button>
    </>
  );
};

export default App;
