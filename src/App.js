import React from 'react';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";
import SectionHWW from "./components/SectionHWW";
import SectionTeam from './components/SectionTeam';
import SectionNew from './components/new';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section/>
        <SectionAbout/>
        <SectionContact/>
        <SectionHWW/>
        <SectionTeam/>
        <SectionNew/>
        <Footer/>
    </div>
  );
}

export default App;