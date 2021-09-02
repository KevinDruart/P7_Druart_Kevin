//requis

// Récupération du module 'file system' de Node permettant de gérer les images
const fs = require('fs');

//connexion a la bdd
const db = require('../connect/dbConnect.js');

//requete sql
const mysql = require('mysql');

/*------------------------------------CREATE POST------------------------------------- */
exports.createPost = (req, res, next) => {
  //on recupere l'id de l'utilisateur
  let userId = req.userIdToken;
  //on recupere les donnees
  //titre du post
  let title = req.body.title;
  let content = req.body.content;
  let image = req.file;
  //si on recupere un id
  if (userId != null) {
    //on recupere tout les posts
    db.query('SELECT * FROM user WHERE id=? ', [userId], (err, result) => {
      //si une erreur dans la requete
      if (err) {
        //on affiche un message
        res.status(500).json({ message: "erreur dans la requete" });
      }
      //sinon
      else {
        if (result[0] != undefined) {
          //on insert le post
          db.query('INSERT INTO post(title, user_id, content, image) VALUES(?,?,?,?)', [title, userId, content, image],
          (err, result) => {
            //si une erreur dans la requete
            if (err) {
              //on affiche un message
              res.status(500).json({ message: "erreur dans la requete" });
            }
            //sinon
            else {
              res.status(200).json({ message: "post ajouter" })
            }
          })
        }
        //sinon
        else {
          //on affiche un message
          res.status(500).json({ message: "id utilisateur introuvable" });
        }
      }
    })
  }
  //sinon
  else {
    //on affiche un message 
    res.status(400).json({ message: "vous devez etre connecter pour voir les posts" });
  }
};



/*---------------------------------READ ALL POST--------------------------------- */
exports.getAllPost = (req, res, next) => {
  //on recupere l'id de l'utilisateur
  let userId = req.userIdToken;
  //si on recupere un id
  if (userId != null) {
    //on recupere tout les posts
    db.query('SELECT * FROM user WHERE id=? ', [userId], (err, result) => {
      //si une erreur dans la requete
      if (err) {
        //on affiche un message
        res.status(500).json({ message: "erreur dans la requete" });
      }
      //sinon
      else {
        if (result[0] != undefined) {
          //on recupere tout les posts
          db.query('SELECT * FROM post ', (err, result) => {
            //si une erreur dans la requete
            if (err) {
              //on affiche un message
              res.status(500).json({ message: "erreur dans la requete" });
            }
            //sinon
            else {
              //si le result n'est pas undefined
              if (result[0] != undefined) {
                //on affiche un message d'erreur
                console.log("voici les posts");
                //on renvoie le result
                res.status(200).json({ result });
              }
              //sinon
              else {
                //on affiche un message
                res.status(500).json({ message: "aucun post" })
              }
            }
          })
        }
        //sinon
        else {
          //on affiche un message
          res.status(500).json({ message: "id utilisateur introuvable" });
        }
      }
    })
  }
  //sinon
  else {
    //on affiche un message 
    res.status(400).json({ message: "vous devez etre connecter pour voir les posts" });
  }
};




/*------------------------------------UPDATE POST------------------------------------- */
exports.modifyPost = (req, res, next) => {
  res.status(200).json({ message: "route update post" });

}

/*------------------------------------DELETE POST------------------------------------- */
exports.deletePost = (req, res, next) => {
  res.status(200).json({ message: "route delete post" });



};

/*----------------------------------like and dislike post------------------------------------ */

exports.likeDislikePost = (req, res, next) => {
  res.status(200).json({ message: "route like post" })
  /*let messageResponse = "Like ou Dislike mis à jour";
  SauceModele.findOne({
      _id: req.params.id
    })
    .then(sauce => {
      console.log(req.body.like);
      if (req.body.like === 1) {
        if (sauce.usersLiked.includes(req.userIdToken)) {
          return res.status(400).json({
            message: "sauce a déjà été liké"
          })
        } else if (sauce.usersDisliked.includes(req.userIdToken)) {
          return res.status(400).json({
            message: "like impossible pour cette sauce tant qu'elle est disliké"
          })
        } else {
          sauce.likes += 1;
          sauce.usersLiked.push(req.userIdToken);
          messageResponse = "Sauce liké"
        }
      } else if (req.body.like === -1) {
        if (sauce.usersDisliked.includes(req.userIdToken)) {
          return res.status(400).json({
            message: "sauce deja disliké"
          })
        } else if (sauce.usersLiked.includes(req.userIdToken)) {
          return res.status(400).json({
            message: "dislike impossible pour cette sauce tant qu'elle est liké"
          })
        } else {
          sauce.dislikes += 1;
          sauce.usersDisliked.push(req.userIdToken);
          messageResponse = "Sauce disliké"
        }
      } else if (req.body.like === 0) {
        if (sauce.usersLiked.includes(req.userIdToken)) {
          sauce.likes -= 1;
          sauce.usersLiked = sauce.usersLiked.filter(item => item !== req.userIdToken);
          messageResponse = "like retiré de la sauce"
        } else if (sauce.usersDisliked.includes(req.userIdToken)) {
          sauce.dislikes -= 1;
          sauce.usersDisliked = sauce.usersDisliked.filter(item => item !== req.userIdToken);
          messageResponse = "dislike retiré de la sauce"
        }
      }
      sauce.save()
        .then(() => res.status(201).json({
          message: messageResponse
        }))
        .catch(error => res.status(400).json({
          error
        }))
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "erreur like d\'une sauce"
      })
    });*/
};