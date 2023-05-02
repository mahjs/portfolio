import React, { useRef } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import { motion, useScroll } from "framer-motion";

const cardVariantsLeft = {
  offscreen: {
    x: 200,
    rotate: 5,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: 0.2,
    },
  },
};

export default function AboutMe(): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".1 1", "1 .8"],
  });
  return (
    <motion.article
      ref={ref}
      style={{ opacity: scrollYProgress }}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariantsLeft}
      viewport={{ once: true }}
      className="service"
    >
      <div className="service__head">
        <h3>A little about me</h3>
      </div>
      <ul className="service__list">
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Good comunication skills</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Very fond of learnign and reading</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>
            Tidy and on-time (<small>almost</small>)
          </p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Try to be criticizable</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Like gaming and love Traveling</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>
            Sometimes <small>dark</small> 🙂
          </p>
        </li>
      </ul>
    </motion.article>
  );
}
