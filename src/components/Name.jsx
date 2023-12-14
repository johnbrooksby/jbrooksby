import React from "react";

const Name = (props) => {

  return (
    <div>
      <h1
        role="button"
        onClick={() => {
          // props.setHide({name: false, about: true, skills: true, projects: true, contact: true})
          props.setHide({about: true, skills: true, projects: true, contact: true})
        }}
      >
        Hi, I'm {props.name}
      </h1>
      {/* <section hidden={props.hide.name}> */}
      <section>
        <p>{props.title}</p>
      </section>
    </div>
  );
};

export default Name;
