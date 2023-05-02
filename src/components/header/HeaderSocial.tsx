import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
        <SiWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocial;
