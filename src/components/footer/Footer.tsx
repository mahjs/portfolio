import "./Footer.css";
import LOGO from "../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        <img src={LOGO} alt="a log for website" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experrience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
