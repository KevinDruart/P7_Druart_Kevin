//appel de la fonction qui permet de switcher login / signup
effectSwitch();

/*-----------------------Recupération des inputs Login-----------------------------*/
//fonction formulaire login
const loginForm = () => {
    //on recupere les données
    //email
    let emailLogin = document.getElementById('email-login');
    //password
    let passwordLogin = document.getElementById('password-login');

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
    //on appel la fonction de validation à l'envoi
    validateFormLogin();
}
//on appel le formulaire et les validations
loginForm();

/*-----------------------------------login------------------------------------ */

const login = () => {
    //Récuperation des inputs du formulaire LOGIN
    //email
    let email = document.getElementById('email-login').value;
    //password
    let password = document.getElementById('password-login').value;

    const user = {
        email: email,
        password: password,
    }

    //Envoi des données récupérées
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(user),
        mode: 'cors',
        cache: 'default',
    }

    //Envoie données formulaire
    const getUser = () => {
        const sendUser = postRequest("http://localhost:3000/api/auth/login", options);
        console.log(user);
    }

    //on appel la fonction d'envoi
    getUser();

}

/*-------------------------Recupération des inputs Signup---------------------------------- */
//fonction formulaire signup
const signupForm = () => {
    //on recupere les données du formulaire signup
    //name
    let nameSignup = document.getElementById('name-signup');
    //firstname
    let firstnameSignup = document.getElementById('firstname-signup');
    //email
    let emailSignup = document.getElementById('email-signup');
    //password
    let passwordSignup = document.getElementById('password-signup');

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
    //on appel la fonction de validation à l'envoi
    validateFormSignup();
}
//on appel le formulaire et les validations
signupForm();

/*------------------------------inscription-----------------------------------*/
//fonction signup 
const signup = () => {
    //on recupere les données du formulaire
    //name
    let name = document.getElementById('name-signup').value;
    //firstname
    let firstname = document.getElementById('firstname-signup').value;
    //email
    let email = document.getElementById('email-signup').value;
    //password
    let password = document.getElementById('password-signup').value;

    const user = {
        name: name,
        firstname: firstname,
        email: email,
        password: password,
    }

    //Envoi des données récupérées
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(user),
        mode: 'cors',
        cache: 'default',
    }

    //fonction envoie données formulaire
    const postUser = () => {
        //on envoie les données
        const sendNewUser = postRequest("http://localhost:3000/api/auth/signup", options);
        //verif données dans user
        console.log(user);
        //on redirige vers la page home en passant quelques informations
        window.location = `./home.html?id=${sendNewUser.id}&name=${user.name}&firstname=${user.firstname}`
    }
    //on appel la fonction d'envoi
    postUser();
}