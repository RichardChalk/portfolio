import React from "react";
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
      <Snackbar message="Email sent successfully" type={SnackbarType.success}/>
    </>
  );
};

export default App;
