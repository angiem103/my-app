import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import MargaritaList from "./components/MargaritaList";
import NewMargarita from "./components/NewMargarita";
import { useState, useEffect } from "react";

function App() {

  const [margaritas, setMargaritas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/margaritas")
    .then(r => r.json())
    .then(margaritas => setMargaritas(margaritas))
  }, [])

  console.log(margaritas)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/margaritalist" element={<MargaritaList margaritas={margaritas} />} />
        <Route path="/newmargarita" element={<NewMargarita/>} />
      </Routes>
    </div>
  );
}

export default App;
