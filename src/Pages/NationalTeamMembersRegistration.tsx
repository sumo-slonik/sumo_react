import BootstrapPage from "./BootstrapPage";
import SimpleTable from "../Components/simpleTable";
import React, {useEffect, useState} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import axios from "axios";

const NationalTeamMembersRegistration = () => {
    const [competitions, setCompetitions] = useState([]);
    const Columns = [
        {"title": "Nazwa imprezy", "field": "name"},
        {"title": "Miasto rozegrania", "field": "city.name"},
        {"title": "Otwarcie zgłaszania", "field": "city.name"},
        {"title": "Zamknięcie zgłaszania", "field": "city.name"},
        {"title": "Początek zawodów", "field": "startDate"},
        {"title": "Koniec zawodów", "field": "endDate"},
        {
            "title": 'Szczegóły', field: 'id', render: (rowData: { id: string }) => {
                return (
                    <LinkContainer to={"/competitions/" + rowData.id}>
                        <Nav.Link><BsArrowUpRight/></Nav.Link>
                    </LinkContainer>
                );
            }
        }
    ]

    useEffect(() => {
        axios({
            url: "http://localhost:8090/competitions/openRegistration",
            method: "get",
        }).then((response) => {
            setCompetitions(response.data);
            debugger;
        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })
    }, [])

    return (
        <BootstrapPage>
            REREJSTRACJA NA ZAWODY
            <>
                <SimpleTable columns={Columns} data={competitions} title={"Lista zawodów z otwartymi zgłoszeniami"}/>
            </>
        </BootstrapPage>
    )
}
export default NationalTeamMembersRegistration