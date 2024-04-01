import React from 'react';
import '/src/pages/5.Training/Register.css'

const TableRegister = ({ data, data2, data3, data4 }) => {
    return (
        <div className='table-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th className='table-header-bg' colSpan='4'>2024 Training Schedule</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className='table-header-bg' colSpan='4'>March 2024</th>
                    </tr>
                    <tr>
                        <th className="table-header">Course #</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Course Title</th>
                        <th className="table-header">Registration Link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="table-cell">{row.column1}</td>
                            <td className="table-cell">{row.column2}</td>
                            <td className="table-cell">{row.column3}</td>
                            <td className="combined-cell">{row.column4}</td>
                        </tr>
                    ))}
                    <tr>
                        <th className="table-header-bg" colSpan='4'>May 2024</th>
                    </tr>
                    <tr>
                        
                        <th className="table-header">Course #</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Course Title</th>
                        <th className="table-header">Registration Link</th>
                    </tr>
                    {data2.map((row, index) => (
                        <tr key={'data2-' + index}>
                            <td className="table-cell">{row.column5}</td>
                            <td className="table-cell">{row.column6}</td>
                            <td className="table-cell">{row.column7}</td>
                            <td className="combined-cell">{row.column8}</td>
                        </tr>
                    ))}
                    <tr>
                        <th className="table-header-bg" colSpan='4'>July & August 2024</th>
                    </tr>
                    <tr>
                        <th className="table-header">Course #</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Course Title</th>
                        <th className="table-header">Registration Link</th>
                    </tr>
                    {data3.map((row, index) => (
                        <tr key={'data3-' + index}>
                            <td className="table-cell">{row.column9}</td>
                            <td className="table-cell">{row.column10}</td>
                            <td className="table-cell">{row.column11}</td>
                            <td className="combined-cell">{row.column12}</td>
                        </tr>
                    ))}
                    <tr>
                        <th className="table-header-bg" colSpan='4'>September & October 2024</th>
                    </tr>
                    <tr>
                        <th className="table-header">Course #</th>
                        <th className="table-header">Date</th>
                        <th className="table-header">Course Title</th>
                        <th className="table-header">Registration Link</th>
                    </tr>
                    {data4.map((row, index) => (
                        <tr key={'data4-' + index}>
                            <td className="table-cell">{row.column13}</td>
                            <td className="table-cell">{row.column14}</td>
                            <td className="table-cell">
                                {row.column3?.includes('site') ? (
                                    <span style={{ color: 'red' }}>link</span>
                                ) : (
                                    row.column15
                                )}
                                </td>
                            <td className="combined-cell">{row.column16}</td>
                        </tr>
                    ))}
                    <tr>
                        <th className="last-cell" colSpan='4'></th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableRegister;