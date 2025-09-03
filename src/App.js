import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {

  const [page, setPage] = useState("home");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    } , 3000);
  }




  return (
    <> {/* JSX / React Fragment*/}
      <Navbar title = "Text Utils" aboutText = "About us" setPage={setPage} showAlert={showAlert} />
      <Alert alert = {alert}/>
      <div className="container my-3">
         {page === "home" && <TextForm heading="Enter the text here to analyze" showAlert={showAlert}/>}
        {page === "about" && <About />}
      </div>
    
    </>
  );
}

export default App;
