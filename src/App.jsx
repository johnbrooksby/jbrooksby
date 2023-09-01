import React from 'react'
import './App.css'
import Name from './components/Name'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
        <Name name="John" title="React web developer" />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
