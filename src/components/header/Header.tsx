import React, { Fragment } from "react";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";
import CTA from "./CTA";
import PORTFOLIO from "../../assets/bg.jpg";
import { motion, useScroll } from "framer-motion";

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className="scroll__pos" />
      <header id="home">
        <img
          src={PORTFOLIO}
          alt="portfolio background"
          className="header__background"
        />
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Mahdi Iranshahi</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          <HeaderSocial />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
