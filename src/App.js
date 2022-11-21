import React from 'react';
//import logo from './logo.svg';

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  return (
    <>
      <Navbar title="TextuTils"/>
      <div className="container my-2">
      <TextForm heading="Enter the text below to analyse :"/>
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
