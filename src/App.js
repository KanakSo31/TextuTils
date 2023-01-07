// import React from 'react';
//import logo from './logo.svg';

// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


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
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text below to analyse :" mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
