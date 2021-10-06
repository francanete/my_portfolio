import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h2>Contact me</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/francanete/"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <FaLinkedin fill="white" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/francanete"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <FaGithub fill="white" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/francanetecom"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <FaTwitterSquare fill="white" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
