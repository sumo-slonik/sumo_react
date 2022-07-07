import SimpleTable from "../simpleTable";
import React from "react";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import achievements from '../../Moks/Achievements.json'

const Fights = () => {
    const Columns = [
        {"title": "Nazwa imprezy", "field": "place"},
        {"title": "Przeciwnik", "field": "competitions.type"},
        {"title": "Rezultat", "field": "category.ageCategory"},
        {"title": "Kategoria wagowa", "field": "category.category"},
    ]

    return (
        <>
            <SimpleTable title={"Walki"} columns={Columns} data={achievements}/>
        </>
    )
}

export default Fights;