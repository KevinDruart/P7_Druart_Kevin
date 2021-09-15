const db = require('../connect/dbConnect.js');

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
