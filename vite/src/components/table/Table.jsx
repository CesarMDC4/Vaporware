import React from 'react';

const Table = ({ data }) => {
    return (
        <div className='table-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th className='table-header' colSpan='3'>Feb & March 2024 Training Schedule</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className="table-header">Course #</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Course Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr>
                            <td className="table-cell">{row.column1}</td>
                            <td className="table-cell">{row.column2}</td>
                            <td className="table-cell">{row.column3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;