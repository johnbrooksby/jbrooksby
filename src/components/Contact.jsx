import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars, SiCodepen } from "react-icons/si";
import { AiFillCodepenSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            // name: true,
            about: true,
            skills: true,
            projects: true,
            contact: !props.hide.contact,
          });
        }}
      >
        Contact
      </h2>

      <section className="contact_me" hidden={props.hide.contact}>
        <div className="linksBox">
          <a
            className={props.darkMode ? "links darkMode" : "links"}
            href="https://www.linkedin.com/in/john-brooksby-fullstackdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <br />
          <a
            className={props.darkMode ? "links darkMode" : "links"}
            href="https://github.com/johnbrooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <br />
          <a
            className={props.darkMode ? "links darkMode" : "links"}
            href="https://www.codewars.com/users/johnbrooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodewars />
          </a>
          <br />
          {/* <a
            className={props.darkMode ? "links darkMode" : "links"}
            href="https://codepen.io/John-Brooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodepen />
          </a>
          <br /> */}
          <a
            className={props.darkMode ? "links darkMode" : "links"}
            style={{ textDecoration: "none" }}
            href="mailto:johnhbrooksby@yahoo.com?subject=We want you to work for us!"
          >
            <MdEmail />
          </a>
        </div>
        {/* <div className="textLinks">
          <a
            className="link"
            style={{ textDecoration: "none" }}
            href="https://docs.google.com/document/d/1v9X50yG8z3e2RIXA9_7UPmu8TPOMSdJ9THt_tavmwhU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>My Resume</h3>
          </a>
          </div>
        <div className="textLinks">
          <a
            className="link"
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/1tZjHGaXx15tXk3oHzhBTGTuLl72J2CLS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Letter of Recommendation</h3>
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Contact;
