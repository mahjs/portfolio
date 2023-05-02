import "./Experience.css";
import FrontEndExp from "./FrontEndExp";
import Development from "./Development";

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <FrontEndExp />
        <Development />
      </div>
    </section>
  );
};

export default Experience;
