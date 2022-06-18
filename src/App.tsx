import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import logo from './logo.svg';
import './App.css';
import MainPage from "./Pages/MainPage";
import Competitions from "./Pages/Competitions";
import BootstrapPage from "./Pages/BootstrapPage";
import CompetitionDetails from "./Pages/Competitions/CompetitionDetails";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/competitions" element={<Competitions/>}/>
                <Route path="/countries" element={<MainPage/>}/>
                <Route path="/rankings" element={<BootstrapPage/>}/>
                <Route path="/login" element={<MainPage/>}/>
                <Route path="/competitions/:competitionID" element={<CompetitionDetails/>}/>

            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
