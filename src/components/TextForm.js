import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("upper case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
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

  const [text, setText] = useState("");
  // /text = "new text"; //wrong Way To set
  //setText("new text"); //right Way To set
  return (
    <>
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary m-1" onClick={handleUpClick}>To Upper Case</button>
      <button className="btn btn-primary m-1" onClick={handleLoClick}>To Lower Case</button>
      <button onClick={speak} className="btn btn-warning m-1">Speak<i class="bi bi-megaphone"></i></button>
       <button className='btn btn-dark m-1' onClick={downloadTxtFile}>Download</button>
    </div>
    <div className="container my-3">
        <h3>Your text summery</h3>
        <p><b>{text.split(" ").length}</b> word and <b>{text.length}</b> Charecter and</p>
        <p>It May Take <b>{0.010 * text.split(" ").length}</b> Minuits to Read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}
