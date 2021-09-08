effectSwitch();

/*-----------------------Recupération des inputs Login-----------------------------*/
const loginOrSignup = () => {
    let emailLogin = document.getElementById('email-login');
    let passwordLogin = document.getElementById('password-login');


    console.log(emailLogin + " " + passwordLogin);

    //on ajoute des evenments pour la validation des données entrer par l'utilisateur
    //evenement nom
    emailLogin.addEventListener('input', (event) => {
        //on appel la fonction de validation 
        validateEmailLogin(event.currentTarget);
    })
    //evenement prenom
    passwordLogin.addEventListener('input', (event) => {
        //on appel la fonction de validation
        validatePasswordLogin(event.currentTarget);
    })

    validateFormLogin();

    const connectLogin = async(inputEmail.value, inputPassword.value) => {

    //Création de l'objet à envoyer, regroupant le formulaire et les articles
    const user = {
        //donnees du formulaire seront stocker ici
        contact: {},
    }
    //Création de l'objet formulaireObjet
    user.contact = {
        email: inputEmail.value,
        password: inputPassword.value,
    }

    //Envoi des données récupérées
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(user),
    }

    //Envoie données formulaire
    const getLoginUser = async () => {
        const getUser = await postRequest("http://localhost:3000/api/auth/login", options);

        //Redirection vers la page home en passant l'id user
        window.location = `./home.html?id=${getUser.id}`

    }
    getLoginUser();
}

/*-------------------------Recupération des inputs Signup---------------------------------- */


let nameSignup = document.getElementById('name-signup');
let firstnameSignup = document.getElementById('firstname-signup');
let emailSignup = document.getElementById('email-signup');
let passwordSignup = document.getElementById('password-signup');

console.log(nameSignup + " " + firstnameSignup + " " + emailSignup + " " + passwordSignup);

//on ajoute des evenments pour la validation des données entrer par l'utilisateur
//evenement nom
nameSignup.addEventListener('input', (event) => {
    //on appel la fonction de validation 
    validateName(event.currentTarget);
})
//evenement prenom
firstnameSignup.addEventListener('input', (event) => {
    //on appel la fonction de validation
    validateFirstName(event.currentTarget);
})
//evenement email
emailSignup.addEventListener('input', (event) => {
    //on appel la fonction de validation
    validateEmail(event.currentTarget);
})
//evenement password
passwordSignup.addEventListener('input', (event) => {
    //on appel la fonction de validation
    validatePassword(event.currentTarget);
})

validateFormSignup();

}

loginOrSignup();