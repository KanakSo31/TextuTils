import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase !", "success")
  };

  const handleLoClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase !", "success")
  };
  const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const speak = () => {
    let msag = new SpeechSynthesisUtterance();
    msag.text = text;
    window.speechSynthesis.speak(msag);
  }

//   const speak = () => {
//     let msag = new SpeechSynthesisUtterance();
//     msag.text = text;
//     window.speechSynthesis.speak(msag);
//   }

//   const downloadTxtFile = () => {
//     const element = document.createElement("a");
//     const file = new Blob([text], {
//       type: "text/plain"
//     });
//     element.href = URL.createObjectURL(file);
//     element.download = "myFile.txt";
//     element.click();
// }
// const handleLightTheme = () => {
//   document.querySelector('.body').style.backgroundColor = "white"
// }

// const handleDarkTheme = () => {
//   document.querySelector('.body').style.backgroundColor = "black"
//   document.querySelector('.body').style.color = "white"
  
// }


  const [text, setText] = useState("");
  // /text = "new text"; //wrong Way To set
  //setText("new text"); //right Way To set
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'darkcyan':'grey'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light', color:props.mode==='dark'?'white':'Green'}}
          id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary m-1" onClick={handleUpClick}>Upper Case</button>
      <button className="btn btn-success m-1" onClick={handleLoClick}>Lower Case</button>
      <button onClick={speak} className="btn btn-warning mx-2 my-2"><i className="bi bi-megaphone"></i></button>
      <button className='btn btn-dark m-1' onClick={downloadTxtFile}><i className="bi bi-download"></i></button>
      {/* <button className="btn btn-primary m-1" onClick={handleUpClick}>To Upper Case</button>
      <button className="btn btn-primary m-1" onClick={handleLoClick}>To Lower Case</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'darkgreen':'grey'}}>
        <h3>Your text summery</h3>
        <p><b>{text.split(/\s+/).length-1}</b> word and <b>{text.length}</b> Charecter and</p>
        <p>It May Take <b>{0.010 * text.split(" ").length}</b> Minuits to Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the box to preview here"}</p>
    </div>
    </>
  );
}
