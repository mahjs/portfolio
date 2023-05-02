import React, { useRef } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import { motion, useScroll } from "framer-motion";

const cardVariantsLeft = {
  offscreen: {
    x: -200,
    rotate: -5,
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

export default function FrontEnd(): React.ReactElement {
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
        <h3>Front-End</h3>
      </div>
      <ul className="service__list">
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Implementing the front-end of the app from zero to hero</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Collaborate with other front-end team members</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Collaborate with UI/UX designers and design system</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Clean coding, code documenation and reporting</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Keep updating the knowledge of Front-end with cutting edge tech</p>
        </li>
      </ul>
    </motion.article>
  );
}
