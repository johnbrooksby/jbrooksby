import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Contact = (props) => {
  
  return (
    <div>
      <h1 role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: true,
            projects: true,
            contact: false,
          });
        }}>Contact</h1>

      <div className="contact_me" hidden={props.hide.contact}>
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
        </div>
        <div className="textLinks">
          <a
            style={{ textDecoration: "none" }}
            href="https://docs.google.com/document/d/1v9X50yG8z3e2RIXA9_7UPmu8TPOMSdJ9THt_tavmwhU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My R&#233;sum&#233;
          </a>
          <br />
          <a
            style={{ textDecoration: "none" }}
            href="mailto:johnhbrooksby@yahoo.com?subject=We want you to work for us!"
          >
            JohnHBrooksby@yahoo.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
