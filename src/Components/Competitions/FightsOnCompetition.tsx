import SimpleTable from "../simpleTable";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import fightOnCompetition from '../../Moks/FightsOnCompetition.json'
import PersonalDetails from "../../Objects/PersonalDetails";
import Fight from "../../Objects/Fight";

const FightsOnCompetition = () => {
    const Columns = [
        {"title": "Zawodnik I", "field": "" ,render: (rowData: Fight) => {
                return <span style={rowData.firstWin? {fontWeight:'bold'} : {fontWeight:'normal'}} >

                    {rowData.personalDetailsI.names + ' ' +rowData.personalDetailsI.surname}
                </span>
            }  },
        {"title": "Zawodnik II", "field": "",render: (rowData: Fight) => {
                return <span style={rowData.firstWin? {fontWeight:'normal'} : {fontWeight:'bold'}} >
                    {rowData.personalDetailsI.names + ' ' +rowData.personalDetailsI.surname}
                </span>
            }  },
        {"title": "Kategoria wiekowa", "field": "rowData.category.ageCategory",render: (rowData: Fight) => {
                return <div>
                    {rowData.category.ageCategory}
                </div>
            }  },
        {"title": "Kategoria wagowa", "field": "",render: (rowData: Fight) => {
                return <div>
                    {rowData.category.category}
                </div>
            }  },
        {"title": "Runda", "field": "",render: (rowData: Fight) => {
                return <div>
                    {rowData.round}
                </div>
            }  },
    ]

    return (
        <>
            <SimpleTable title={"Zgłoszeni zawodnicy"} columns={Columns} data={fightOnCompetition}/>
        </>
    )
}

export default FightsOnCompetition;