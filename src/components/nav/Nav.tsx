import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { BiBookAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import useScroll from "./useScroll";

const Nav: React.FC = () => {
  const { hide, active, setActive } = useScroll("home");

  return (
    <nav className={hide ? "nav__hide" : ""}>
      <a
        href="#home"
        onClick={() => setActive("#")}
        className={active === "home" ? "active " : ""}
      >
        <AiOutlineHome />
        <p>Home</p>
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
      >
        <FaUserTie />
        <p>About</p>
      </a>
      <a
        href="#experience"
        onClick={() => setActive("experience")}
        className={active === "experience" ? "active " : ""}
      >
        <BiBookAlt />
        <p>Experience</p>
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active === "services" ? "active " : ""}
      >
        <MdOutlineDesignServices />
        <p>Services</p>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("portfolio")}
        className={active === "portfolio" ? "active " : ""}
      >
        <BsPersonBoundingBox />
        <p>Portfolio</p>
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active " : ""}
      >
        <BiMessageRoundedDetail />
        <p>Contact</p>
      </a>
    </nav>
  );
};
export default Nav;
