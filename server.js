
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./route/api');

const MONGODB_URI = 'mongodb+srv://rementha:12345abc@iou.4kgbg.mongodb.net/<dbname>?retryWrites=true&w=majority';

const cors = require('cors');


mongoose.connect(MONGODB_URI || 'mongodb://localhost/newposts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));