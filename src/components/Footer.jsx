import React, {useState} from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className={props.darkMode ? "foot darkMode" : "foot"}>
        <a onClick={() => {
          props.setDarkMode(!props.darkMode)
          console.log(props.darkMode)
        }}>{props.darkMode ? "Light Mode" : "Dark Mode"}</a>
        <p>
          &copy; 2023 John Brooksby
        </p>

      </footer>
    </div>
  );
};

export default Footer;
