//Importation des plugins requis
//framework express
const express = require('express');

//extraction json
const bodyParser = require('body-parser');

//protection des requetes http
const helmet = require('helmet');
const hpp = require('hpp');

//parametre cookie
const cookieSession = require('cookie-session');
const Keygrip = require('keygrip');

//protection contres les attaques xss
const xssClean = require('xss-clean');

const path = require('path');

const userRoutes = require('./routes/user');

require('dotenv').config();

//Connexion a la base de données


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Cookie session
app.use(cookieSession({

    name: 'session',
    keys: new Keygrip([process.env.COOKIESECRET], 'SHA256', 'base64'),

    // Cookie Options
    path: '/',
    httpOnly: true,
    secure: true,
    signed: true,
    maxAge: 600000, // 10 minutes
    sameSite: 'strict'
}));


// Protection contre les attaques DOS
app.use(hpp());

// Protection contre les attaques XSS
app.use(xssClean());

app.use(bodyParser.json());

//définit des en-têtes de réponse HTTP liés à la sécurité pour se protéger contre certaines vulnérabilités Web bien connues
app.use(helmet());



//route users
app.use('/api/auth', userRoutes);

//routes de stockage pour les images
app.use('/images', express.static(path.join(__dirname, 'images')));

//pour les routes qui n'existe pas
app.use((req, res) => {

    res.status(404).json({ error: "cet route n'existe pas" });

});

module.exports = app;