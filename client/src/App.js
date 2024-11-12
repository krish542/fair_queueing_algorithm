import React, { useState } from 'react';
import Form from './components/Form';
import QueueDisplay from './components/QueueDisplay';
import ResultsTable from './components/ResultsTable';
import ChartDisplay from './components/ChartDisplay';

function App() {
    const [queues, setQueues] = useState([]);
    const [results, setResults] = useState([]);
    const [isTransmitting, setIsTransmitting] = useState(false);

    const addUser = (userData) => {
        if (userData.packets > 0 && userData.delay >= 0) {
            setQueues((prevQueues) => [...prevQueues, userData]);
        }
    };

    const transmitPackets = async () => {
        setIsTransmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/transmit');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data); 
            console.log('Transmission results:', data); // Log response for debugging
            setResults(data.results); // Assuming 'results' is part of the API response structure
        } catch (error) {
            console.error('Error transmitting packets:', error);
        } finally {
            setIsTransmitting(false);
        }
    };

    return (
        <div className="App">
            <h1>Fair Queueing Simulation</h1>
            <Form addUser={addUser} />
            <QueueDisplay queues={queues} current={isTransmitting} />
            <button onClick={transmitPackets} disabled={isTransmitting}>
                {isTransmitting ? 'Transmitting...' : 'Start Transmission'}
            </button>
            <ResultsTable results={results} />
            {results.length > 0 && <ChartDisplay results={results} />}
        </div>
    );
}

export default App;
