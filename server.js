const express = require('express');
const bodyParser = require('body-parser'); // Parse request body data
require('dotenv').config();
const app = express();

app.use(bodyParser.json()); // Parse JSON data in request body

const postsRouter = require('./routes/posts'); // Import the posts routes
app.use('/api/posts', postsRouter); // Mount the routes under '/api/posts'

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port})`));