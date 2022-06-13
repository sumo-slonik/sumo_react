import MaterialTable from 'material-table';
import React, {Component, useEffect, useState} from 'react';
import competitions from '../Moks/Competitions.json';
import axios from "axios";



const EmplTable = function BasicSearch() {
    const [subjects, setSubjects] = useState([]);

    useEffect( () => {
        axios({
            url: "http://localhost:8090/employee",
            method: "get",
        }).then((response) => {
            setSubjects(response.data);

        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })

    }, [])
    console.log(subjects)
    return (
        <MaterialTable

            title="Lista"
            columns={[
                { title: 'Imię', field: 'name' },
                { title: 'Nazwisko', field: 'surname' },
                { title: 'Karta', field: 'cardId' },
            ]}
            data={subjects}
            options={{
                search: true,
                maxBodyHeight: 400
            }}
        />
    )
}

export default EmplTable