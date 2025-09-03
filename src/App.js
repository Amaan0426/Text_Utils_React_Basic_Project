import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';


function App() {

  const [page, setPage] = useState("home");

  return (
    <> {/* JSX / React Fragment*/}
      <Navbar title = "Text Utils" aboutText = "About us" setPage={setPage} />

      <div className="container my-3">
         {page === "home" && <TextForm heading="Enter the text here to analyze" />}
        {page === "about" && <About />}
      </div>
    
    </>
  );
}

export default App;
