import React, { useRef } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import { motion, useScroll } from "framer-motion";

const cardVariantsLeft = {
  offscreen: {
    scale: 0.7,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export default function Development(): React.ReactElement {
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
        <h3>Web Development</h3>
      </div>
      <ul className="service__list">
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Collaborate with the Back-end team</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Review team members code and give suggestions</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Good understanding of Back-end process and tools</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Completely connect Front-end to Back-end</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>
            Ability to make the CI/CD pipelines from testing, staging and
            production
          </p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Testing the app from Unit to E2E testing</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Keep learning and updating</p>
        </li>
        <li>
          <HiOutlineCheck className="service__list-icon" />
          <p>Work with Debugging tools, (chrome DevTools, Postman)</p>
        </li>
      </ul>
    </motion.article>
  );
}
