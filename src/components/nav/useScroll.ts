import { useState, useEffect } from "react";

export default function useScroll(initialActive: string, initialHide = false) {
  const [active, setActive] = useState(initialActive);
  const [hide, setHide] = useState(initialHide);

  useEffect(() => {
    const footer = document.getElementById("footer") as HTMLElement;
    const footerOffsetTop = footer?.offsetTop - window.innerHeight;
    const about =
      document.getElementById("about")?.offsetTop! - window.innerHeight / 2;
    const experience =
      document.getElementById("experience")?.offsetTop! -
      window.innerHeight / 2;
    const services =
      document.getElementById("services")?.offsetTop! - window.innerHeight / 2;
    const portfolio =
      document.getElementById("portfolio")?.offsetTop! - window.innerHeight / 2;
    const contact =
      document.getElementById("contact")?.offsetTop! - window.innerHeight / 2;
    const handler = () => {
      if (window.pageYOffset > footerOffsetTop) {
        setHide(true);
      } else setHide(false);

      if (window.pageYOffset < about) {
        setActive("home");
      }
      if (window.pageYOffset >= about && window.pageYOffset < experience) {
        setActive("about");
      }
      if (window.pageYOffset >= experience && window.pageYOffset < services) {
        setActive("experience");
      }
      if (window.pageYOffset >= services && window.pageYOffset < portfolio) {
        setActive("services");
      }
      if (window.pageYOffset >= portfolio && window.pageYOffset < contact) {
        setActive("portfolio");
      }
      if (window.pageYOffset >= contact) {
        setActive("contact");
      }
    };
    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  });

  return { active, setActive, hide, setHide };
}
