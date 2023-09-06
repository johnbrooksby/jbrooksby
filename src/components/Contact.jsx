import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Contact = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: true,
            projects: true,
            contact: false,
          });
        }}
      >
        Contact
      </h2>

      <section className="contact_me" hidden={props.hide.contact}>
        <div className="linksBox">
          <a
            className="links"
            href="https://www.linkedin.com/in/john-brooksby-fullstackdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <br />
          <a
            className="links"
            href="https://github.com/johnbrooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <br />
          <a
            className="links"
            href="https://www.codewars.com/users/johnbrooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodewars />
          </a>
          <br />
          <a
            className="links"
            style={{ textDecoration: "none" }}
            href="mailto:johnhbrooksby@yahoo.com?subject=We want you to work for us!"
          >
            <MdEmail />
          </a>
        </div>
        <div className="textLinks">
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
      </section>
    </div>
  );
};

export default Contact;
