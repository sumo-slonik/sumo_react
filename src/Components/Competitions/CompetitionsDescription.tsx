import SimpleTable from "../simpleTable";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {MdOutlineDownload} from "react-icons/md";
import {Button, Card} from 'react-bootstrap'

const CompetitionsDescription = () => {
    return (
        <>
            <div>
                <Card className="competitionDetailsCard vh-80">
                    <Card.Img variant="top" src="https://picsum.photos/200/150" />
                    <Card.Body>
                        <Card.Title>
                            OPIS ZAWODÓW
                        </Card.Title>
                        <Card.Text>
                            Ranga:<br/>

                            Organizator:<br/>

                            Fenderacja nadzorująca organizacje:<br/>

                            Kategorie wiekowe na zawodach:<br/>

                        </Card.Text>
                            Komunikat organizacyjny: <a href={'#'}>NAZWA PLIKU Z KOMUNIKATEM <MdOutlineDownload/></a>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CompetitionsDescription;