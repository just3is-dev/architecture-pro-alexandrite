const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('service-b response');
});

app.listen(port, () => {
    console.log(`service-b started on port ${port}`);
});