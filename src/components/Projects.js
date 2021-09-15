import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div className="flex-container projects">
        <div className="card">
          <h2 className="project-title">Cryptocurrency Tracker</h2>
          <p>
            I’m an aspiring web designer who loves everything about the web.
            I've lived in lots of different places and have worked in lots of
            different jobs. I’m excited to bring my life experience to the
            process of building fantastic looking websites.
          </p>
          <p>
            I’ve been a professional cook and gardener and am a life-long
            learner who's always interested in expanding my skills.
          </p>
          <a
            href="https://cryptotracker-fran.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cta-button">See Live</button>
          </a>

          <i className="fab fa-github fa-hero" id="second-bttn-icon">
            <a
              href="https://github.com/francanete/crypto-tracker"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <FaGithub fill="black" />
            </a>
          </i>
        </div>
        <div className="card">
          <img src="./images/project1.png" alt="projects" id="img-project" />
        </div>
      </div>
      <div className="flex-container projects">
        <div className="card">
          <h2 className="project-title">Flickr Photo Gallery</h2>
          <p>
            I’m an aspiring web <strong>React.js</strong> designer who loves
            everything about the web. I've lived in lots of different places and
            have worked in lots of different jobs. I’m excited to bring my life
            experience to the process of building fantastic looking websites.
          </p>
          <p>
            I’ve been a professional cook and gardener and am a life-long
            learner who's always interested in expanding my skills.
          </p>
          <a
            href="https://photo-gallery-flickr.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cta-button">See Live</button>
          </a>
          {/* <button className="cta-button">See Live</button> */}
          <i className="fab fa-github fa-hero" id="second-bttn-icon">
            <a
              href="https://github.com/francanete/photo-gallery-api"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <FaGithub fill="black" />
            </a>
          </i>
          {/* <i className="fab fa-github fa-hero" id="second-bttn-icon"></i> */}
        </div>
        <div className="card">
          <img src="./images/project2.png" alt="projects" id="img-project" />
        </div>
      </div>
      <div className="flex-container projects">
        <div className="card">
          <h2 className="project-title">The Amazing Project #1</h2>
          <p>
            I’m an aspiring web designer who loves everything about the web.
            I've lived in lots of different places and have worked in lots of
            different jobs. I’m excited to bring my life experience to the
            process of building fantastic looking websites.
          </p>
          <p>
            I’ve been a professional cook and gardener and am a life-long
            learner who's always interested in expanding my skills.
          </p>
          <button className="cta-button">See Live</button>
          <i className="fab fa-github fa-hero" id="second-bttn-icon"></i>
        </div>
        <div className="card">
          <img src="./images/project.jpeg" alt="projects" id="img-project" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
