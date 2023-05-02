import React from "react";
import "./Services.css";
import FrontEnd from "./Front-End";
import Development from "./Development";
import AboutMe from "./AboutMe";

const Services: React.FC = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <FrontEnd />
        <Development />
        <AboutMe />
      </div>
    </section>
  );
};

export default Services;
