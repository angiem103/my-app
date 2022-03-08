import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import MargaritaList from "./components/MargaritaList";
import NewMargarita from "./components/NewMargarita";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/margaritalist" element={<MargaritaList />} />
        <Route path="/newmargarita" element={<NewMargarita/>} />
      </Routes>
    </div>
  );
}

export default App;
