const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const rateLimit = require("express-rate-limit");

const verifyPassword = require('../middleware/verify-password');        // importation du middleware

//limite de connexion
const createAccountLimiter = rateLimit({
    // 1 heure
    windowMs: 60 * 60 * 1000, 
    // Blocage aprés 2 requetes
    max: 2, 
    message:(JSON.stringify("Trop de tentative de connexion, compte bloquer pendant 1 heure"))
  });

// Endpoint crée un nouvel utilisateur
router.post('/signup', verifyPassword, userCtrl.signup); 
// Endpoint connexion d'un utilisateur
router.post('/login', createAccountLimiter, userCtrl.login); 
//Endpoint get user (voir son profil)
router.get('/', userCtrl.getUser);
//Endpoint delete user
router.delete('/', userCtrl.deleteUser);
//Endpoint update user
router.put('/', userCtrl.modifyUser);

module.exports = router;
