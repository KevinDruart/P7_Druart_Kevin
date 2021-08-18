const mysql = require('mysql');
console.log('Connexion à la base de données...');
let dbconnect = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    port: '3307',
    database: 'groupomania', 
});
dbconnect.connect(function(err) { 
    if (err) throw err;
    console.log('Connecté!')
});

module.exports = dbconnect;