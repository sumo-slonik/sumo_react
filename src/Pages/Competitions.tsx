import React, {useEffect, useState} from "react";
import BootstrapPage from "./BootstrapPage";
import axios from "axios";
import SimpleTable from "../Components/simpleTable";
import { Nav } from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {LinkContainer} from "react-router-bootstrap";

const Competitions = () => {
    const [competitions, setCompetitions] = useState([]);
    const Columns = [{"title": "Mistrzostwa Polski", "field": "name"},
        {"title": "Miasto", "field": "city.name"},
        {"title": "Data startu", "field": "startDate"},
        {"title": "Data końca", "field": "endDate"},
        { "title": 'Szczegóły', field: 'id', render: (rowData : {id:string}) => {
                return (
                    <LinkContainer to={"/competitions/"+rowData.id}>
                        <Nav.Link><BsArrowUpRight/></Nav.Link>
                    </LinkContainer>
                );
            }
        }
    ]

    useEffect(() => {
        axios({
            url: "mocks/Competitions.json",
            method: "get",
        }).then((response) => {
            setCompetitions(response.data);
        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })
    }, [])
    console.log(competitions)

    return (
        <BootstrapPage>
            <>
                <SimpleTable columns={Columns} data={competitions} title={"Lista zawodów"}/>
            </>
        </BootstrapPage>)
}

export default Competitions