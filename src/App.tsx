import React, {useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import logo from './logo.svg';
import './App.css';
import MainPage from "./Pages/MainPage";
import Competitions from "./Pages/Competitions";
import BootstrapPage from "./Pages/BootstrapPage";
import CompetitionDetails from "./Pages/CompetitionDetails";
import AlterCompetitionsDetails from "./Pages/AlterCompetitionsDetails";
import CompetitorDetails from "./Pages/CompetitorDetails";
import NationalRepresentations from "./Pages/NationalRepresentations";
import NationalRepresentationDetails from "./Pages/NationalRepresentationDetails";
import CountryAdminPage from "./Pages/CountryAdminPage";
import CreateCompetition from "./Pages/CreateCompetition";


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
                    <Route path="/countries" element={<NationalRepresentations/>}/>
                    <Route path="/countries/:countryID" element={<NationalRepresentationDetails/>}/>
                    <Route path="/rankings" element={<BootstrapPage/>}/>
                    <Route path="/login" element={<MainPage/>}/>
                    <Route path="/competitions/:competitionID" element={<AlterCompetitionsDetails/>}/>
                    <Route path="/competitors/:competitorID" element={<CompetitorDetails/>}/>
                    <Route path="/alterCompetitors" element={<AlterCompetitionsDetails/>}/>
                    <Route path="/countryAdmin" element={<CountryAdminPage/>}/>
                    <Route path="/countryAdmin/createCompetition" element={<CreateCompetition/>}/>

                </Routes>
        </div>
    </BrowserRouter>
  );
}



export default App;
