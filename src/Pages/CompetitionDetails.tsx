import BootstrapPage from "./BootstrapPage";
import {useParams} from "react-router-dom";
import DeclaredCompetitors from "../Components/Competitions/DeclaredCompetitors";
import {useEffect, useState} from "react";
import axios from "axios";
import {Tabs} from "../Components/Tabs";
import declaredCompetitions from "../Moks/DeclaredCompetitions.json"
import CompetitionsDescription from "../Components/Competitions/CompetitionsDescription";


const CompetitionDetails = () => {

    const params = useParams();
    const [competitors, setCompetitors] = useState([]);

    console.log(declaredCompetitions)


    const tabs = [
        {
            label: 'Opis',
            Component: CompetitionsDescription
        },
        {
            label: 'Zgłoszeni zawodnicy',
            Component: DeclaredCompetitors
        },
        {
            label: 'Walki',
            Component: DeclaredCompetitors
        },
        {
            label: 'Skład sędziowski',
            Component: DeclaredCompetitors
        },
        {
            label: 'Wyniki',
            Component: DeclaredCompetitors
        }
    ]

    return (
        <BootstrapPage>
            <>
                <h1> NAZWA ZAWODÓW</h1>
                <h2> 10.02.2020</h2>
                <h2> Kraków, Polska</h2>
                <Tabs tabs={tabs} />
            </>
        </BootstrapPage>)
}

export default CompetitionDetails