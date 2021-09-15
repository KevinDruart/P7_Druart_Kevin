const mysql = require('mysql');

console.log('Connexion à la base de données...');

const myHost = process.env.dbConnectHost;
const myUser = process.env.dbConnectUser;
const myPassword = process.env.dbConnectPassword;
const myPort = process.env.dbConnectPort;
const myDb = process.env.dbConnectDb;

let db = mysql.createConnection({ 
    host : myHost, 
    user : myUser, 
    password : myPassword, 
    port : myPort,
    database : myDb, 
});

// Test de la connexion avec la base de données
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {     
    if (error) {
        // Erreur de connexion
      return console.error('error: ' + error.message);                          
    }
    // Connexion validée
    console.log("La connexion à la base de données MySQL est validée !");              
  });
  
  module.exports = db;