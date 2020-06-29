require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes')
const PORT = process.env.PORT || 8080;

app.use('/api', routes);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_DB_URL, 
    { 
        useNewUrlParser: true,  
        useUnifiedTopology: true  
    }
);
const db = mongoose.connection;

if(!db) {
    console.log('Error connecting to Database!');
} else {
    console.log('Connected to Database!')
}

app.get('/', (req, res) => {
    res.send('Express App is online!')
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}.`)
})