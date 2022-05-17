import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import logo from './logo.svg';
import './App.css';
import Menu from "./Components/Menu";
import MainPage from "./Pages/MainPage";
import Competitions from "./Pages/Competitions";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/competitions" element={<Competitions/>}/>
                <Route path="/countries" element={<MainPage/>}/>
                <Route path="/rankings" element={<MainPage/>}/>
                <Route path="/login" element={<MainPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
