const mysql = require('mysql');

console.log('Connexion à la base de données...');

let db = mysql.createConnection({ 
    host : process.env.dbConnectHost, 
    user : process.env.dbConnectUser, 
    password : process.env.dbConnectPassword, 
    port : process.env.dbConnectPort,
    database : process.env.dbConnectDb, 
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