import SimpleTable from "../simpleTable";
import React from "react";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import declared from '../../Moks/DeclaredCompetitions.json'
import {LinkContainer} from "react-router-bootstrap";

const DeclaredCompetitors = () => {
    const Columns = [
        {
            title: "", field: 'personalDetails', render: (rowData: { personalDetails: {profilePhoto: string } }) => {
                return <img src={rowData.personalDetails.profilePhoto} style={{width: 40, borderRadius: '50%'}} alt=""/>
            }
        },
        {"title": "Imię", "field": "personalDetails.names"},
        {"title": "Nazwisko", "field": "personalDetails.surname"},
        {"title": "Kraj", "field": "country.name"},
        {"title": "Kategoria", "field": "category"},

        {
            "title": 'Szczegóły', field: 'id', render: (rowData: { id: string }) => {

                return (
                    <LinkContainer to={"/competitors/" + rowData.id}>
                        <Nav.Link ><BsArrowUpRight/></Nav.Link>
                    </LinkContainer>);
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