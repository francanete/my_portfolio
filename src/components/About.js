const About = () => {
  return (
    <div className="about">
      <h2 id="about" className="about-title">
        About me
      </h2>
      <div className="flex-container">
        <section className="card">
          <img src="images/francanete.jpg" alt="fran canete" id="img-about" />
        </section>

        <section className="card" id="about-text">
          <p>
            I'm Fran Canete, frontend developer, business geek and lifelong
            learner based in Manchester.
          </p>
          <p>
            Passionate about how businesses can create useful solutions to
            improve people's lives. I find learning and implementing new
            technologies a fantastic tool to achieve this goal, creating web
            applications that solve real-life problems.
          </p>
          <p>
            Most of my projects are based on React.js since it is one of the
            best technologies to build rich UI that allow me to build versatile
            solutions having the end user in mind. I also spend part of my time
            expanding my skills learning backend technologies like Node.js and
            Express.js with the long-term goal of becoming a full-stack
            developer able to design powerful applications from the ground up.
          </p>
          <p>
            In my spare time, you can find me taking long walks in nature,
            running, and enjoying one of my favourite hobbies, podcasting.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
