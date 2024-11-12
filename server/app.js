const express = require('express');
const app = express();
const cors = require('cors');
const fairQueueRoutes = require('./routes/fairQueueRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', fairQueueRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
