const db = require('../connect/dbConnect.js');

//recherche si un membre existe avec un email
exports.isExist = (email) => {
    const sql = 'SELECT count(*) as nb FROM user WHERE email = ?';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [email], (error, result, fields) => {
                if (result === undefined || result === "") {
                    reject("Erreur Sql");
                } else {
                    resolve(result[0]);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//recherche si un membre existe avec un id
exports.isExistId = (id) => {
    const sql = 'SELECT count(*) as nb FROM user WHERE id = ?';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [id], (error, result, fields) => {
                if (result === undefined || result === "") {
                    reject("Erreur Sql");
                } else {
                    resolve(result[0]);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//trouve un membre avec son email
exports.findOneBy = (email) => {
    const sql = 'SELECT * FROM user WHERE email = ?';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [email], (error, result, fields) => {
                if (result === undefined || result === "") {
                    reject('Adresse email et ou mot de passe incorrect !');
                } else {
                    resolve(result[0]);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//creer un nouveau membre
exports.create = (name, firstName, emailMasked, email, hash) => {
    const sql = 'INSERT INTO user(name, firstname, emailMasked, email, password) VALUES(?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [name, firstName, emailMasked, email, hash], (error, result, fields) => {
                if (result === undefined) {
                    reject(`Impossible de créer un nouvel utilisateur.`);
                } else {
                    resolve(`utilisateur ajouté`);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//trouve un membre avec son id
exports.findOneById = (id) => {
    const sql = 'SELECT * FROM user WHERE id = ?';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [id], (error, result, fields) => {
                if (result === undefined || result === "") {
                    reject('Votre id est introuvable ou essayer de vous reconnecter !');
                } else {
                    resolve(result[0]);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};

//modifier un membre
exports.updateOne = (name, firstName, emailMasked, email, hash) => {
    const sql = 'UPDATE INTO user(name, firstname, emailMasked, email, password) VALUES(?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        try {
            db.query(sql, [name, firstName, emailMasked, email, hash], (error, result, fields) => {
                if (result === undefined) {
                    reject(`Impossible de modifier utilisateur.`);
                } else {
                    resolve(`utilisateur modifié`);
                };
            });
        } catch (error) {
            reject(error);
        };
    });
};
