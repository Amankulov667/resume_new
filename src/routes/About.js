import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer.js";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I am a Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
