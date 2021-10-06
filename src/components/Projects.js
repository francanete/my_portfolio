import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div className="flex-container projects">
        <div className="card">
          <h2 className="project-title">Cryptocurrency Tracker</h2>
          <p>
            In this project, I am calling a public API using the Axios library
            to get all the necessary data in the application. to get all the
            necessary data in the application.
          </p>
          <p>
            The data can be updated after 60 seconds via the update button,
            making a new API call and displaying the updated results.
          </p>
          <p>
            <small>React, React States, React Hooks, Fetch</small>
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
            This application connects to the Flickr API and accesses its
            database of photos. The user can perform a search and get results
            for a specific search term.
          </p>
          <p>
            I added React Route to display the searches and a "Not Found" page
            to handle 404 errors.
          </p>
          <p>
            <small>React, Custom Hooks, Fetch, React Router, REST API</small>
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
          <h2 className="project-title">Star Wars Battle</h2>
          <p>
            Using the Star Wars API I added some logic to face 2 random
            characters from the saga that will appear in battle! Whoever has the
            tallest height wins.
          </p>
          <p>
            I built this project using React and Axios as an API library to get
            all the necessary data. May the code be with you!
          </p>
          <p>
            <small>React, REST API, Axios, State Hook, Bootstrap.</small>
          </p>
          <a
            href="https://star-wars-battle.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cta-button">See Live</button>
          </a>
          {/* <button className="cta-button">See Live</button> */}
          <i className="fab fa-github fa-hero" id="second-bttn-icon">
            <a
              href="https://github.com/francanete/star-wars"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <FaGithub fill="black" />
            </a>
          </i>
        </div>
        <div className="card">
          <img src="./images/project3.png" alt="projects" id="img-project" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
