import SimpleTable from "../simpleTable";
import React from "react";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import achievements from '../../Moks/Achievements.json'

type Props = {
    maxHeight?:number;
}
const NationalTeam:React.FC<Props> = (props) => {
    const Columns = [
        {"title": "Imię", "field": "place"},
        {"title": "Nazwisko", "field": "competitions.type"},
        {"title": "Płeć", "field": "category.ageCategory"},
        {"title": "Kategoria wiekowa", "field": "category.ageCategory"},
        {"title": "Kategoria wagowa", "field": "category.category"},
    ]

    return (
        <>
            <SimpleTable title={"Reprezentacja"} columns={Columns} data={achievements} maxHeight={props.maxHeight}/>
        </>
    )
}

export default NationalTeam;