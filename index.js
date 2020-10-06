const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const database = require('./database/config');
const port = 3000;

const app = express();

//connexion in database
database.sync().then((resul)=>{
    console.log("connexion");
}).catch((erro)=>{
    console.error("ça marche");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});