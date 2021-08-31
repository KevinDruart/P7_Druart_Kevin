//connexion a la bdd
const db = require('../connect/dbConnect.js');

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
  //configuration du masquage email
  const emailMask2Options = {
    //caractere de masquage
    maskWith: "*",
    //nombre de caractere sans masque avant @
    unmaskedStartCharactersBeforeAt: 2,
    //nombre de caractere sans masque apres @
    unmaskedEndCharactersAfterAt: 3,
    maskAtTheRate: false
  };

  //on recupére l'email présent dans le body
  let email = req.body.email;

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
    //on récupére le reste des données dans le body
    //nom
    let name = req.body.name;
    //prénom
    let firstName = req.body.firstname;
    //mot de passe
    let password = req.body.password;
    //masquage email 
    let emailMasked = maskData.maskEmail2(req.body.email, emailMask2Options);

    //On attribue un nombre de tour au hashage et ou salage
    const saltRounds = 10;

    // On appelle la méthode hash de bcrypt
    bcrypt.hash(password, saltRounds, (error, hash) => {
      //Verification récupération des données
      console.log("email: " + email + " name: " + name + " firstname: " + firstName + " password: " + password + " emailMasked: " + emailMasked + " hash " + hash);
      //On vérifie si on a bien une adresse email
      if (req.body.email) {
        //On vérifie si cet adresse email est deja enregistrer dans la BDD
        db.query('SELECT * FROM user WHERE email = ?', [req.body.email], (err, result) => {
          //si on a une erreur de requete, on l'affiche
          if (err) {
            res.json(error(err.message))
          }
          //sinon on renvoi le result
          else {
            //si le result n'est pas undefined (cela signifie que cet email est deja enregistrer)
            if (result[0] != undefined) {
              //On retourne alors un message
              res.status(500).json({ message: "adresse email deja enregistré" })
            }
            //sinon on insert le nouvelle utilisateur 
            else {
              db.query('INSERT INTO user(name, firstname, emailMasked, email, password) VALUES(?,?,?,?,?)', [name, firstName, emailMasked, email, hash],
                (err, result) => {
                  //si on a une erreur dans la requete
                  if (err) {
                    //on affiche cet erreur
                    res.json(error(err.message))
                  }
                  //sinon
                  else {
                    //On confirme par un message la création de l'utilisateur
                    res.status(200).json({ message: "utilisateur ajouter" })
                  }
                })
            }
          }
        })
      }
      //si on a pas d'email saisi
      else {
        //on affiche un message
        res.status(500).json({ message: "aucune adresse email saisi" })
      }
    });
  }
  //si l'email n'est pas une adresse email professionel
  else {
    //on retourne un message d'erreur
    res.status(400).json({ message: "Le format d'email n'est pas correcte, il doit obligatoirement s'agir de votre email @groupomania.fr" });
  }
};


/*-----------------------------------------LOGIN--------------------------------------------*/

exports.login = (req, res, next) => {
  /*//on recupére l'email présent dans le body
  let email = req.body.email;
 
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
    if (!user) {
      return res.status(401).json({ error: 'Adresse email et ou mot de passe incorrect !' });
    }
    // On utilise bcrypt pour comparer les hashs et savoir si ils ont la même string d'origine
    bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Adresse email et ou mot de passe incorrect !' });
        }
        // On récupere les données utilisateur qui correspondent à l'adresse email present dans le body
        let loginSql = 'SELECT * FROM user WHERE email = ?';
        let inserts = email;
        loginSql = mysql.format(loginSql, inserts)
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
  }
  else {
    res.status(401).json({
      message: "adresse email incorrecte, espace réserver aux personnels de groupomania."
    });
  }*/
};

/*-------------------------------------- GET USER -------------------------------------*/
exports.getUser = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM user WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

/*------------------------------------UPDATE USER------------------------------------- */
exports.modifyUser = (req, res, next) => {
  const id = req.body.id;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "UPDATE user SET email = ? password = ? WHERE id = ?",
    [email, password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}

/*------------------------------------DELETE USER------------------------------------- */
exports.deleteUser = (req, res, next) => {

  const id = req.params.id;
  db.query("DELETE FROM user WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

};
