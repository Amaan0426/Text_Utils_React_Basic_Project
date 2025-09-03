import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    //console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText)

  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value)
  }

  const handleCapitalizeClick = () => {
  let words = text.split(" ");
  let newText = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      newText += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    if (i < words.length - 1) {
      newText += " "; // space add karo
    }
  }

  setText(newText);
};

const handleAlternateClick = () => {
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      newText += text[i].toUpperCase();
    } else {
      newText += text[i].toLowerCase();
    }
  }

  setText(newText);
};

const handleReverseClick = () => {
  let newText = text.split("").reverse().join("");
  setText(newText);
};

const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard!");
};

const handleRemoveSpaces = () => {
  let newText = text.replace(/\s+/g, " ").trim();
  setText(newText);
};

const handleFindReplace = () => {
  let findWord = prompt("Enter word to find:");
  let replaceWord = prompt("Enter word to replace with:");
  let newText = text.replaceAll(findWord, replaceWord);
  setText(newText);
};

const handleSentenceCase = () => {
  let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
    c.toUpperCase()
  );
  setText(newText);
};

const handleDownload = () => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "textutils.txt";
  document.body.appendChild(element);
  element.click();
};



  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state

  return (
    <>
      <div className="container my - 3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleUpperClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleLowerClick}>Convert to Lowercase</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleClearClick}>Clear Text</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleCapitalizeClick}>Convert to Capitalized</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleAlternateClick}>Convert to Alternate</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleReverseClick}>Convert to Reverse Text</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleCopyClick}>Copy Text to Clipboard</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleRemoveSpaces}>Remove Extra Spaces</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleFindReplace}>Find & Replace</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleSentenceCase}>Convert to Sentence Case</button>
        <button className = "btn btn-primary my-2 mx-2" onClick = {handleDownload}>Download Text</button>






      </div>

    
      <div>
        <h2>Your text summary</h2>
      </div>


      <div className="row my-3">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Words</h5>
            <p>{text.split(" ").filter((w)=>w.length!==0).length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Characters</h5>
            <p>{text.length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Reading Time</h5>
            <p>{0.008 * text.split(" ").length} mins</p>
          </div>
        </div>
        <h2>Preview</h2>
         <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>

     



    </>
  );
}
