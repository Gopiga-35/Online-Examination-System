import { useState, useEffect } from 'react';

function DashboardPage() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const storedResults = JSON.parse(localStorage.getItem('examResults')) || [];
        const sortedResults = storedResults.sort((a, b) => b.score - a.score);
        setResults(sortedResults);
    }, []);

    return (
        <div style={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
           <br/><br/><br/><br/><br/> <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Student Results</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
                <thead>
                    <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Student Name</th>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Student ID</th>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Course</th>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Score </th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0' }}>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{result.student}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{result.hallTicket}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{result.course}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardPage;
