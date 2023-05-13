import "./About.css";
import ME from "../../assets/me.webp";
import { FaAward } from "react-icons/fa";
import { RiFoldersLine } from "react-icons/ri";

const About: React.FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about Me " />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Yeaers </small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            I'm a Front-End Web Developer.I have a background of project
            management and industrial engineering. I've always loved Computer
            engineering field and had a tendency to learn it. In the last few
            years I've studied this field (with special focus on front-end) and
            practiced a lot; I've been reading many books about CS(computer
            science, algorithms, data structures, ...) and have a good
            understanding of it.
            <span style={{ margin: "1rem 0", display: "inline-block" }}>
              I love to learn new stuff, specially the ones that simplify the
              hard parts.In fact I'm still learning...
            </span>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
