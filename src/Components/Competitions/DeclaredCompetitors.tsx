import SimpleTable from "../simpleTable";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import declared from '../../Moks/DeclaredCompetitions.json'

const DeclaredCompetitors = () => {
    const Columns = [{"title": "Imię", "field": "personalDetails.names"},
        {"title": "Nazwisko", "field": "personalDetails.surname"},
        {"title": "Klub", "field": "club.name"},
        { "title": 'Szczegóły', field: 'id', render: (rowData : {id:string}) => {
                return <Nav.Link href={"/competitors/"+rowData.id}><BsArrowUpRight/></Nav.Link>;
            }
        }
    ]

    return (
        <>
            <SimpleTable title={"Zgłoszeni zawodnicy"} columns={Columns} data={declared}/>
        </>
    )
}

export default DeclaredCompetitors;