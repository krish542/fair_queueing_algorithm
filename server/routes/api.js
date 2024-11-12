const express = require('express');
const router = express.Router();

// Endpoint for simulating packet transmission
router.get('/transmit', (req, res) => {
  const results = []; // Initialize an empty array to store transmission results
  
  // Simulate the transmission of packets and generate some random data
  const numberOfTransmissions = 5; // Example: 5 transmissions

  for (let i = 0; i < numberOfTransmissions; i++) {
    // Generate random values for latency, throughput, and fairness index
    const latency = Math.floor(Math.random() * 100); // Random latency between 0 and 99 ms
    const throughput = Math.floor(Math.random() * 100); // Random throughput between 0 and 99 Mbps
    const fairnessIndex = Math.random().toFixed(2); // Random fairness index between 0 and 1

    // Push the generated data into the results array
    results.push({
      latency,          // Example: { latency: 45, throughput: 80, fairnessIndex: 0.76 }
      throughput,
      fairnessIndex
    });
  }

  console.log('Generated results:', results);  // Log the generated results for debugging
  res.json({ results });  // Send the results as the response
});

module.exports = router;
