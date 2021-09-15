const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const rateLimit = require("express-rate-limit");

const verifyPassword = require('../middleware/verify-password');        // importation du middleware

const verifyMail = require('../middleware/testMail');

//limite de connexion
const createAccountLimiter = rateLimit({
    // 1 heure
    windowMs: 60 * 60 * 1000, 
    // Blocage aprés 2 requetes
    max: 25, 
    message:(JSON.stringify("Trop de tentative de connexion, compte bloquer pendant 1 heure"))
  });

// Endpoint crée un nouvel utilisateur
router.post('/signup', verifyMail, verifyPassword, userCtrl.signup); 
// Endpoint connexion d'un utilisateur
router.post('/login', verifyMail, createAccountLimiter, userCtrl.login); 
//Endpoint get user (voir son profil)
router.get('/:id', userCtrl.getUser);
//Endpoint delete user
router.delete('/:id', userCtrl.deleteUser);
//Endpoint update user
router.put('/:id', userCtrl.modifyUser);

module.exports = router;
