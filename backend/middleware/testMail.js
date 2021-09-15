
module.exports = (req, res, next) => {
    //regex email 
    //chiffre lettre - _ ç  (autorisé)@groupomania.fr
    //exemples attendu: 
    //contact95@groupomania.fr
    //jean-françois@groupomania.fr
    let regexMail = /^[\w-ç\.]+@groupomania\.fr$/;
    //console.log(req.body.email);
    //on test l'adresse email
    if (!regexMail.test(req.body.email)) {
        return res.status(400).json({
            message: "Le format d'email n'est pas correcte, il doit obligatoirement s'agir de votre email @groupomania.fr"
        });
    }
    else {
        next();
    }
};