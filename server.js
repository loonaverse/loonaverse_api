const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Express App is online!')
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}.`)
})