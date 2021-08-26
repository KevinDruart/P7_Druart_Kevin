const mysql = require('mysql');
console.log('Connexion à la base de données...');

let dbconnect = mysql.createPool({ 
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    port: '3307',
    database: 'groupomania', 
});

// Test de la connexion avec la base de données
dbconnect.query('SELECT 1 + 1 AS solution', function (error, results, fields) {     
    if (error) {
        // Erreur de connexion
      return console.error('error: ' + error.message);                          
    }
    // Connexion validée
    console.log("La connexion à la base de données MySQL est validée !");              
  });
  
  module.exports = dbconnect;