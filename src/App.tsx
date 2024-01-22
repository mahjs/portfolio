import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/skills/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App(): React.ReactElement {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
}
