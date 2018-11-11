const express = require('express'); //tornando o express disponível
const mongoose = require ('mongoose');
const cors = require('cors');

const app = express(); //instaciando seu app

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    "mongodb://goweek:goweek123@ds129762.mlab.com:29762/goweek-breno-backend", 
    {
        useNewUrlParser: true
    }
);  

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log(':) server started on port 3000');
});