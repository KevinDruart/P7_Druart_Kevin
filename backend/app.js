//Importation des plugins requis
//framework express
const express = require('express');

//extraction json
const bodyParser = require('body-parser');

//protection des requetes http
const helmet = require('helmet');

//protection contres les attaques xss
const xssClean = require('xss-clean');

const path = require('path');

require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');



const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Protection contre les attaques XSS
app.use(xssClean());

app.use(bodyParser.json());

//définit des en-têtes de réponse HTTP liés à la sécurité pour se protéger contre certaines vulnérabilités Web bien connues
app.use(helmet());

//route users
app.use('/api/auth', userRoutes);

// route post
app.use('/api/messages', postRoutes);

//routes de stockage pour les images
app.use('/images', express.static(path.join(__dirname, 'images')));

//pour les routes qui n'existe pas
app.use((req, res) => {

    res.status(404).json({ error: "cet route n'existe pas" });

});

module.exports = app;