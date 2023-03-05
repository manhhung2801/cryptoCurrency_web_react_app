import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Currency from "./routes/Currency";

function App() {

  return (
  <div className="App">
    <BrowserRouter>
       <Routes>
            <Route path="/" exact element={<MainRoute/>}/>
            <Route path="/currency/:id"  element={<Currency/>}/>
       </Routes>
    </BrowserRouter>

      
  </div>
  );
}

export default App;
