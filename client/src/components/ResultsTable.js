import React from 'react';

function ResultsTable({ results }) {
  if (!results || results.length === 0) {
    return <p>No results available. Start transmission to see results.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Transmission Number</th>
          <th>Latency</th>
          <th>Throughput</th>
          <th>Fairness Index</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{result.latency}</td>
            <td>{result.throughput}</td>
            <td>{result.fairnessIndex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
