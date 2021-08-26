//connexion a la bdd
const dbconnect = require('../connect/dbConnect.js');

//requete sql
const mysql = require('mysql');

//securisation authentification avec un TOKEN genéré
const jwt = require('jsonwebtoken');

//hashage MDP
const bcrypt = require('bcrypt');

//maskage email
const maskData = require('../node_modules/maskdata/index');

/*-----------------------------------------SIGNUP--------------------------------------------*/
// INSCRIPTION D'UN UTILISATEUR avec hashage MDP (BCRYPT) et maskage email(maskdata)
exports.signup = (req, res, next) => {
  console.log(req.body);

  const emailMask2Options = {
    maskWith: "*",
    unmaskedStartCharactersBeforeAt: 2,
    unmaskedEndCharactersAfterAt: 3,
    maskAtTheRate: false
  };

  let email = req.body.email;
  let name = req.body.name;
  let firstName = req.body.firstname;
  let password = req.body.password;
  let emailMasked = maskData.maskEmail2(req.body.email, emailMask2Options);

  console.log("email: " + email + " name: " + name + " firstname: " + firstName + " password: " + password + " emailMasked: " + emailMasked);

  //On attribue un nombre de tour au hashage et ou salage
  const saltRounds = 10;

  //regex email 
  //chiffre lettre - _ ç  (autorisé)@groupomania.fr
  //exemples attendu: 
  //contact95@groupomania.fr
  //jean-françois@groupomania.fr
  let regexMail = /^[a-z0-9ç_-]+@groupomania\.fr$/;

  //on test l'adresse email
  let testMail = regexMail.test(email);
console.log(testMail);
  //on agit si l'email est correcte 
  if (testMail) {
    // On appelle la méthode hash de bcrypt
    bcrypt.hash(password, saltRounds, (error, hash) => {
      // On prepare les données utilisateur 
      let sql = "INSERT INTO `user`(`name`, `firstname`, `emailMasked`, `email`, `password`) VALUES (?, ?, ?, ?, ?, ?)";
      let inserts = [name, firstName, emailMasked, email, hash];
      sql = mysql.format(sql, inserts);

      // envoi de la requête a la base de données
      const userSignup = dbconnect.query(sql, (error, user) => {
        // si aucune erreur après la requête           
        if (!error) {
          res.status(201).json({ message: "utilisateur crée" });
        } else {
          // erreur utilisateur déjà existant
          return res.status(409).json({ error: "Cet utilisateur existe déjà !" })
        }
      });

    });
  }
  //si l'email n'est pas correcte 
  else {
    //on retourne un message d'erreur
    res.status(400).json({
      message: "Le format d'email n'est pas correcte, il doit obligatoirement s'agir de votre email @groupomania.fr"
    });
  }


};


/*-----------------------------------------LOGIN--------------------------------------------*/
exports.login = (req, res, next) => {

  res.status(200).json({ message: "route login" })
  // On doit trouver l'utilisateur qui correspond à l'adresse entrée par l'utilisateur
  /* let loginSql = 'SELECT * FROM users WHERE email = ?';
 
     .then(user => {
       if (!user) {
         return res.status(401).json({ error: 'Adresse email et ou mot de passe incorrect !' });
       }
       // On utilise bcrypt pour comparer les hashs et savoir si ils ont la même string d'origine
       bcrypt.compare(req.body.password, user.password)
         .then(valid => {
           if (!valid) {
             return res.status(401).json({ error: 'Adresse email et ou mot de passe incorrect !' });
           }
           res.status(200).json({
             userId: user._id,
             token: jwt.sign(
               {
                 userId: user._id
               },
               // Clé d'encodage du token
               process.env.TOKEN,
               // expiration au bout de 24h
               {
                 expiresIn: '24h'
               }
             )
           });
         })
         .catch(error => res.status(500).json({ error }));
     })
     .catch(error => res.status(500).json({ error }));*/
};

/*-------------------------------------- GET USER -------------------------------------*/
exports.getUser = (req, res, next) => {
  res.status(200).json({
    message: "route get user"
  });
};

/*------------------------------------UPDATE USER------------------------------------- */
exports.modifyUser = (req, res, next) => {
  res.status(200).json({
    message: "route update user"
  });
}

/*------------------------------------DELETE USER------------------------------------- */
exports.deleteUser = (req, res, next) => {
  res.status(200).json({
    message: "route delete User"
  });
};
