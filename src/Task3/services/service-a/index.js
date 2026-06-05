const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const serviceBUrl = process.env.SERVICE_B_URL || 'http://service-b:8080';

app.get('/', async (req, res) => {
    const response = await fetch(serviceBUrl);
    const data = await response.text();

    res.send(`service-a -> ${data}`);
});

app.listen(port, () => {
    console.log(`service-a started on port ${port}`);
});