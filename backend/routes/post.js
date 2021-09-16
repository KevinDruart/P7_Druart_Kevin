
const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');


/*------------------------------------------------ENDPOINTS----------------------------------------------------*/
//Get all posts
    router.get('/',  postCtrl.getAllPost);
//Create post
    router.post('/',  multer, postCtrl.addPost);
//Modify post
    router.put('/:id',  multer, postCtrl.modifyPost);
//delete post
    router.delete('/:id',  postCtrl.deletePost); 
//endpoint ajout/annulation like ou dislike d'un post
    router.post('/:id/like',  postCtrl.likeDislikePost);


    module.exports = router;