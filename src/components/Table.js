import React from "react";

const Table = (props) => {
    return (
        <>
            <table>
                <thead>
                    <th>Candidate Id</th>
                    <th>Candidate Name</th>
                    <th>Candidate Education</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Samrat</td>
                        <td>BSc SE</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shivani</td>
                        <td>MCA</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Krishna</td>
                        <td>BSc CS</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Dipesh</td>
                        <td>BSc CS</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table;