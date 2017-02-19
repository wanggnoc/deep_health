const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

// Static files
app.use('/static', express.static(path.join(__dirname + '/static')));

// Routes
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.log('An error occurred', err)
    }

    console.log(`Server is listening on port ${port}`);
});
