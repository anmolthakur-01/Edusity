import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Tittle/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contect from "./Components/Contect/Contect";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonial/>
        <Title subTitle="Contect us" title="Get in Touch" />
        <Contect/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
