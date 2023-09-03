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
  // const [render, setRender] = useState(true)

  // useEffect(() => {
  //   setRender(!render)
  //   // console.log("render", render)
  // }, [hide])

  return (
    <div>
      <img src="/avatar2.jpg" className="avatar" />
      <div className="body">
        <Name
          hide={hide}
          setHide={setHide}
          name="John"
          title="React web developer"
        />
        <About hide={hide} setHide={setHide} />
        <Skills hide={hide} setHide={setHide} />
        <Projects hide={hide} setHide={setHide} />
        <Contact hide={hide} setHide={setHide} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
