// import React from 'react';
//import logo from './logo.svg';

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
function App() {
  const [mode, setMode] = useState('light'); //wheather darkmode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
      <Navbar title="TextuTils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-2">
      <TextForm heading="Enter the text below to analyse :" mode={mode}/>
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
