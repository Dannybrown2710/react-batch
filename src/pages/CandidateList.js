import React from 'react';
import Table from '../components/Table'
const CandidateListFromServer = [
    {
        "name":"Shivani",
        "id": "1",
        "education": "MCA"
    },
    {
        "name":"Shivani",
        "id": "1",
        "education": "MCA"
    },
    {
        "name":"Shivani",
        "id": "1",
        "education": "MCA"
    },
    {
        "name":"Shivani",
        "id": "1",
        "education": "MCA"
    }

]
const CandidateList = () =>{
    return (
        <Table data={CandidateListFromServer}/>
    )
}


export default CandidateList;
