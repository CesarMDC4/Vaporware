import React from 'react';


const courseHistoryTable = ({ data }) => 
{
    return(
        <table className="table border-4 border-green-500">
        <thead>
            <tr className="divide-x-4 divide-green-500">
                <th>Name</th>
                <th>Company</th>
                <th>Course Name</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>   
            {data.map((Trainee, index) => (
                <tr key={index} className="divide-x-4 divide-y-4 divide-green-500">
                    <td className="divide-y-4">{Trainee.employeeName}</td>
                    <td>{Trainee.company}</td>
                    <td>{Trainee.courseName}</td>
                    <td>{Trainee.status}</td>
                </tr> 
            ))}
        </tbody>
        </table>
    )
}

export default courseHistoryTable;
