import { motion } from "framer-motion";
import Rating from "./Rating";

const cardVariantsRight = {
  offscreen: {
    y: 250,
    x: 100,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

export default function BackEndExp(): React.ReactElement {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariantsRight}
      viewport={{ once: true }}
      className="experience__backend"
    >
      <h3>Development & Basics</h3>
      <div className="experience__content backend">
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>Nodejs</h4>
              <Rating rate={3.5} />
            </div>
            <div className="experience__details__attr text-light">
              Express, Npm, Yarn, REST, Graphql, Web Authentication
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>MongoDB, MySQL</h4>
              <Rating rate={3} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              Bigginer, learning...
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>Version Control</h4>
              <Rating rate={4} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              Git, GitLab, GitHub
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>Testing</h4>
              <Rating rate={4} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              Jest, RTL, Cypress
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>English Language</h4>
              <Rating rate={4.5} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              Listening, Reading, Speaking, Writting
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>OS</h4>
              <Rating rate={4} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              macOS, Linux
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
