import React from "react";

const Projects = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: true,
            projects: false,
            contact: true,
          });
        }}
      >
        Projects
      </h2>
      <section hidden={props.hide.projects}>
        <p>
          <span>
            <a
              className="link"
              href="http://54.153.111.7/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plant Picture Database
            </a>
          </span>{" "}
          /{" "}
          <span>
            <a
              className="link"
              href="https://youtu.be/F1Tv-F8tKHU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </span>
        </p>
        <p>
          <span>
            <a
              className="link"
              href="http://52.53.167.147/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sure Spark Coaching
            </a>
          </span>{" "}
          /{" "}
          <span>
            <a
              className="link"
              href="https://youtu.be/_lbRH4t2dWg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </span>
        </p>
        <p>
          <span>
            <a
              className="link"
              href="http://annabrooksby.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My wife's website
            </a>
          </span>
        </p>
        <p>
          <span>
            <a
              className="link"
              href="https://johnstictactoe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fun little tic-tac-toe
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Projects;
