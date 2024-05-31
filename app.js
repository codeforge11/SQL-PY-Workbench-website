const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'css')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(2435, () => {
    console.log("Server is running on port 2435");
});
