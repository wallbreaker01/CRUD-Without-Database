const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(bodyParser.json());

// Setup routes
app.use('/', router);

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send({ error: 'Something went wrong' });
});

// Launch the server
app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
});
