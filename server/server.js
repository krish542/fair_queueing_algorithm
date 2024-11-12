const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');  // Import the API routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api', apiRoutes);  // All routes in api.js will be prefixed with /api

// Serve static files from React (if using Create React App)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
