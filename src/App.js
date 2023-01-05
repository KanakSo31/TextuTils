// import React from 'react';
//import logo from './logo.svg';

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //wheather darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Activated !", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Activated !", "success");
    }
  }
  return (
    <>
      <Navbar title="TextuTils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-2">
      <TextForm showAlert={showAlert} heading="Enter the text below to analyse :" mode={mode}/>
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
