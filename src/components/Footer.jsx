import React, {useState} from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className={props.darkMode ? "foot footerText darkMode" : "foot footerText"}>
        <a onClick={() => {
          props.setDarkMode(!props.darkMode)
        }}>{props.darkMode ? "Light Mode" : "Dark Mode"}</a>
        <p style={{fontSize:'14pt'}}>
          &copy; 2023 John Brooksby
        </p>
      </footer>
    </div>
  );
};

export default Footer;
