// Récupération du module 'file system' de Node permettant de gérer les images
const fs = require('fs');

//connexion a la bdd
const db = require('../connect/dbConnect.js');

//import postModel
const postModel = require('../models/postModel.js');

//requete sql
const mysql = require('mysql');

/*------------------------------------CREATE POST------------------------------------- */
exports.addPost = (req, res, next) => {
  let id = req.body.userId;
  userModel.isExistId(id)
    .then(resultat => {
      if (resultat.nb = 0) {
        return res.status(400).json({
          error: "Vous devez etre connecter pour poster"
        });
      }
      postModel.createPost(userId, dateTime, title, message, image)
        .then(resultat => {
          return res.status(200).json({
            message: resultat
          });
        })
        .catch(error => {
          return res.status(400).json({
            message: error
          });
        });
    })
    .catch(error => {
      console.log(error);
      return res.status(400).json({ error: "Une erreur est survenue." });
    });
};


/*---------------------------------READ ALL POST--------------------------------- */
exports.getAllPost = (req, res, next) => {

  postModel.getPosts(req.body.id)
    //on a notre promesse
    .then(posts => {
      //on verifie si l'id du body est identique au req.userIdToken
      if (req.body.id === req.userIdToken) {
        //
        res.status(200).json(posts);
      }
      //sinon
      else {
        //on retourne un message d'erreur
        res.status(400).json({ message: "Votre id est introuvable" });
      }

    })
    //erreur promesse
    .catch(error => {
      return res.status(401).json({
        message: error
      });
    });

}




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