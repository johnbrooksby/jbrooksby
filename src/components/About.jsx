import React from "react";

const About = (props) => {
  return (
    <div>
      {/* <div className={props.darkMode && "darkMode"}> */}
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            // name: true,
            about: !props.hide.about,
            skills: true,
            projects: true,
            contact: true,
          });
        }}
      >
        About
      </h2>
      <section hidden={props.hide.about}>
        <p>I have a good work ethic and I work well with others.</p>
        <p>I continue to show up when things get hard.</p>
        <p>I have a knack for identifying inefficiencies</p>
        <p>and working to improve on them.</p>
        <p>I am a finisher.</p>
        <h3></h3>
      </section>
    </div>
  );
};

export default About;
