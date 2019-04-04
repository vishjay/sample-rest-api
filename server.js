const express = require('express');

const app = express();

app.get('/',(req, res) => {

    res.send({
        message : 'Welcome to sample-rest-api'
    });
});


app.listen(3000, () => {
    console.log("Server started and is accessible on http://localhost:3000");
})