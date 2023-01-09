// import React from 'react';
//import logo from './logo.svg';

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //wheather darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Activated !", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - is Funny";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - Install Now";
      // }, 3000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Activated !", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextuTils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-2">
        <Routes>
           <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm/>} />
          {/* <Route exact path="/About">
            <About/>
          </Route> */}
          {/* <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text below to Analyse :" mode={mode}/>
          </Route> */}
          {/* <Link/> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
