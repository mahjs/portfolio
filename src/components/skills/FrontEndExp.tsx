import React from "react";
import { motion } from "framer-motion";
import Rating from "./Rating";

const cardVariantsLeft = {
  offscreen: {
    y: 250,
    x: -100,
    rotate: 10,
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

export default function FrontEndExp(): React.ReactElement {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className="experience__frontend"
      variants={cardVariantsLeft}
      viewport={{ once: true }}
    >
      <h3>FrontEnd Development</h3>
      <div className="experience__content">
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>HTML</h4>
              <Rating rate={4.5} />
            </div>
            <div className="experience__details__attr text-light">
              semantic, accessibility
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>CSS</h4>
              <Rating rate={4.5} />
            </div>
            <div className="experience__details__attr text-light">
              sass, less, css-in-js, css-module, responsiveness
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>JavaScript</h4>
              <Rating rate={5} />
            </div>
            <div className="experience__details__attr text-light">
              ES6, ES22, OOP, FP, Design Patterns
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>Redux</h4>
              <Rating rate={4} />
            </div>
            <div className="experience__details__attr text-light">
              RTK, RTK Qeury, Thunk, Saga
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4 style={{ fontSize: "1rem" }}>Tailwind, Bootstrap</h4>
              <Rating rate={3.5} center={true} />
            </div>
            <div className="experience__details__attr text-light">
              Some Experienced, learning...
            </div>
          </div>
        </article>
        <article className="experience__details">
          <div>
            <div className="experience__item">
              <h4>React</h4>
              <Rating rate={4.5} />
            </div>

            <div className="experience__details__attr text-light">
              React Query, PWA, Service Workers, SPA, SSR, SSG{" "}
              <strong>Nextjs</strong>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
