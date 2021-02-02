import React from 'react';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";
import SectionHWW from "./components/SectionHWW";
import SectionTeam from './components/SectionTeam';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section/>
        <SectionAbout/>
        <SectionContact/>
        <SectionHWW/>
        <SectionTeam/>
        <Footer/>
    </div>
  );
}

export default App;