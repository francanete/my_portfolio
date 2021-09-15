import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="hero-container">
        <h1 className="headline">
          Hi, my name is <span className="h1Color">Fran Canete</span>
          <br /> I'm a Frontend Developer
        </h1>
        <div className="hero-icons">
          <i className="fa-hero">
            <FaCss3Alt fill="#133245" />
          </i>
          <i className="fa-hero">
            <FaHtml5 fill="#133245" />
          </i>
          <i className="fa-hero">
            <SiNpm fill="#133245" />
          </i>
          <i className="fa-hero">
            <FaNode fill="#133245" />
          </i>
          <i className="fa-hero">
            <SiGit fill="#133245" />
          </i>
          <i className="fa-hero">
            <SiJavascript fill="#133245" />
          </i>
          <i className="fa-hero">
            <FaReact fill="#133245" />
          </i>
        </div>
        <a href="#about">
          <button className="cta-button">Know more</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
