import React, {useState} from "react";

const Footer = ({darkMode, setDarkMode} = props) => {
  return (
    <div>
      <footer className={darkMode ? "foot footerText darkMode" : "foot footerText"}>
        <a onClick={() => {
          localStorage.setItem("darkMode", darkMode ? "false" : "true" )
          setDarkMode(!darkMode)
        }}>{darkMode ? "Light Mode" : "Dark Mode"}</a>
        <p style={{fontSize:'14pt'}}>
          &copy; 2023 John Brooksby
        </p>
      </footer>
    </div>
  );
};

export default Footer;
