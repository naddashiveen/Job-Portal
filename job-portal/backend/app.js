const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/jobs', jobRoutes);

mongoose.connect('your_mongodb_uri', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(error => console.log(error));
