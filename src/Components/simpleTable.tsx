import MaterialTable from "@material-table/core";
import React, {Component, useEffect, useState} from 'react';
import competitions from '../Moks/Competitions.json';
import axios from "axios";
import {Column} from "../Objects/Column";
import {Container} from "react-bootstrap";

type Props ={
    title:string,
    columns:Column[],
    data:{}[],
    maxHeight?:number;
}
const SimpleTable:React.FC<Props> = function BasicSearch(props) {
    return (
        <MaterialTable
            title={props.title}
            columns = {props.columns}
            data={props.data}
            options={{
                search: true,
                maxBodyHeight: props.maxHeight?props.maxHeight:350,
                toolbar:false
            }}
            onRowClick={(event, rowData, togglePanel) => console.log(rowData)}
        />
    )
}

export default SimpleTable