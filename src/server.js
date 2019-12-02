const express = require("express");
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    console.log(path.join(__dirname, '../index.html'));
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});