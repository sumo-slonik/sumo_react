import MaterialTable from 'material-table';
import React, {Component, useEffect, useState} from 'react';
import competitions from '../Moks/Competitions.json';
import axios from "axios";
import {Column} from "../Objects/Column";

type Props ={
    title:string,
    columns:Column[],
    data:{}[]
}
const SimpleTable:React.FC<Props> = function BasicSearch(props) {
    return (
        <MaterialTable
            title={props.title}
            columns = {props.columns}
            data={props.data}
            options={{
                search: true,
                maxBodyHeight: 400
            }}
            onRowClick={(event, rowData, togglePanel) => console.log(rowData)}
        />
    )
}

export default SimpleTable