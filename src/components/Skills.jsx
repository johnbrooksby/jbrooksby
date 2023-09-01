import React from "react";

const Skills = (props) => {
  
  return (
    <div>
      <h1
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: false,
            projects: true,
            contact: true,
          });
        }}
      >
        Skills
      </h1>
      <section hidden={props.hide.skills}>
        <p>HTML, CSS, JavaScript, React, Node, Express,</p>
        <p>VScode, SQL, JWT, AWS</p>
      </section>
    </div>
  );
};

export default Skills;
