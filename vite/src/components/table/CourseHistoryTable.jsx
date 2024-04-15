import React from 'react';


const courseHistoryTable = ({ data }) => 
{
    return(
        <table className="table border-4 border-gray-900">
        <thead>
            <tr className="divide-x-4 divide-y-2 divide-gray-900">
                <th>Date</th>
                <th>Company</th>
                <th>Course Name</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>   
            {data.map((Trainee, index) => (
                <tr key={index} className="divide-x-4 divide-y-2 divide-gray-900">
                    <td>{Trainee.trainingDate}</td>
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
