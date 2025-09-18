import footerStyles from "./styles/footer.module.css";
import type { JSX } from "react";

import { IoLogoGithub } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = (): JSX.Element => {
  return (
    <footer className={footerStyles.footerContainer}>
      <a href="">
        <IoLogoGithub size={45} />
      </a>
      <a href="">
        <RiInstagramFill size={45} />
      </a>
      <a href="">
        <IoLogoLinkedin size={45} />
      </a>
    </footer>
  );
};

export default Footer;
