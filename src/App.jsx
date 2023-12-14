import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [hide, setHide] = useState({
    name: false,
    about: true,
    skills: true,
    projects: true,
    contact: true,
  });
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div>
      <div className={!darkMode ? "avatarDiv" : "avatarDiv darkMode"}>
        <img src="/avatar2.jpg" className={!darkMode ? "avatar" : "avatar darkModeAvatar"} />
      </div>
      <div className={!darkMode ? "body" : "body darkMode"}>
        <Name
          hide={hide}
          setHide={setHide}
          name="John"
          title="React web developer"
          darkMode={darkMode}
        />
        <About hide={hide} setHide={setHide} darkMode={darkMode} />
        <Skills hide={hide} setHide={setHide} darkMode={darkMode} />
        {/* <Projects hide={hide} setHide={setHide} darkMode={darkMode} /> */}
        <Contact hide={hide} setHide={setHide} darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
