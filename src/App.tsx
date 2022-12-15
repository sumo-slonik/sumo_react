import React, {useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import './App.css';
import MainPage from "./Pages/MainPage";
import Competitions from "./Pages/Competitions";
import BootstrapPage from "./Pages/BootstrapPage";
import AlterCompetitionsDetails from "./Pages/AlterCompetitionsDetails";
import CompetitorDetails from "./Pages/CompetitorDetails";
import NationalRepresentations from "./Pages/NationalRepresentations";
import NationalRepresentationDetails from "./Pages/NationalRepresentationDetails";
import CountryAdminPage from "./Pages/CountryAdminPage";
import CreateCompetition from "./Pages/CreateCompetition";
import ClubAdminPage from "./Pages/ClubAdminPage";
import CreateCompetitor from "./Pages/CreateCompetitor";
import CreatePersonalDetails from "./Components/CreateCompetitior/CreatePersonalDetails";
import AddNewCompetitorPage from "./Pages/AddNewCompetitor";
import {createGlobalState} from "react-hooks-global-state";
import NationalTeamEdit from "./Pages/NationalTeamEdit";
import NationalTeamMembersRegistration from "./Pages/NationalTeamMembersRegistration";



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
                    <Route path="/clubAdmin" element={<ClubAdminPage/>}/>
                    <Route path="/clubAdmin/addCompetitor" element={<CreateCompetitor/>}/>
                    <Route path="/clubAdmin/addCompetitor/addNew" element={<AddNewCompetitorPage/>}/>
                    <Route path="/nationalCoach/editTeam" element={<NationalTeamEdit/>}/>
                    <Route path="/nationalCoach/competitionRegistration" element={<NationalTeamMembersRegistration/>}/>

                </Routes>
        </div>
    </BrowserRouter>
  );
}



export default App;
