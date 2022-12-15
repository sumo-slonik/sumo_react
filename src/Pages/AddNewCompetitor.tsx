import React from "react";
import BootstrapPage from "./BootstrapPage";
import countries from '../Moks/Countries.json'
import {Button, Card, Col, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import {TiPlusOutline} from "react-icons/ti";
import CreatePersonalDetails from "../Components/CreateCompetitior/CreatePersonalDetails";


const AddNewCompetitorPage = () => {

    return (
        <BootstrapPage>
            <CreatePersonalDetails/>
        </BootstrapPage>)
}
export default AddNewCompetitorPage;