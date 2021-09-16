const db = require('../connect/dbConnect.js');

//creer un post
exports.createPost = (userId, dateTime, title, message, image) => {
    const sql = 'INSERT INTO post(user_id, time_post, title, content, image) VALUES(?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [userId, dateTime, title, message, image], (error, result, fields) => {
                if (result === undefined) {
                    reject(`Impossible de créer un nouveau post.`);
                } else {
                    resolve(`post ajouté`);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//modifier un post
exports.updatePost = (title, message, image) => {
    const sql = 'UPDATE INTO post( title, content, image) VALUES(?,?,?)';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [title, message, image], (error, result, fields) => {
                if (result === undefined) {
                    reject(`Impossible de modifier le post.`);
                } else {
                    resolve(`post modifié`);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//chercher les post
exports.getPosts = () => {
    const sql = 'SELECT * FROM post';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, (error, result, fields) => {
                if (result === undefined) {
                    reject(`Affichage des posts impossible.`);
                } else {
                    resolve(`voici les posts`);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};