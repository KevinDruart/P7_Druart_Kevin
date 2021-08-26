
const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');


/*------------------------------------------------ENDPOINTS----------------------------------------------------*/
//Get all posts
    router.get('/', auth, postCtrl.getAllPost);
//Create post
    router.post('/', auth, multer, postCtrl.createPost);
//Modify post
    router.put('/:id', auth, multer, postCtrl.modifyPost);
//delete post
    router.delete('/:id', auth, postCtrl.deletePost); 
//endpoint ajout/annulation like ou dislike d'un post
    router.post('/:id/like', auth, postCtrl.likeDislikePost);


    module.exports = router;