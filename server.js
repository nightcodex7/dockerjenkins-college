const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h2>Docker is Running Successfully!</h2>
        <p>This containerized application is built and deployed by <strong>Tuhin</strong>.</p>
        <p>Visit my portfolio:
        <a href="https://nightcode.co.in" target="_blank">
            https://nightcode.co.in
        </a></p>
    `);
});

app.listen(5040, () => {
    console.log("Application listening on port 5040");
});
