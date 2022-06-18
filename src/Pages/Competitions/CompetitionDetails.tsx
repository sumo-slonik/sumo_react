import BootstrapPage from "../BootstrapPage";
import {useParams} from "react-router-dom";
import DeclaredCompetitors from "../../Components/Competitions/DeclaredCompetitors";
import {useEffect, useState} from "react";
import axios from "axios";




const CompetitionDetails = () => {

    const params = useParams();
    const [competitors, setCompetitors] = useState([]);

    useEffect(() => {
        axios({
            url: "mocks/DeclaredCompetitions.json",
            method: "get",
        }).then((response) => {
            setCompetitors(response.data);
        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })
    }, [])
    console.log(competitors)
    return (
        <BootstrapPage>
            <>
                JAKAś TREść
                {params.competitionID}
                <DeclaredCompetitors/>
            </>
        </BootstrapPage>)
}

export default CompetitionDetails