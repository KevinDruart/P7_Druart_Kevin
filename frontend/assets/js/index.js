
/*--------------------------Effet switch login / signup-------------------------------- */

const loginForm = document.querySelector("form.login");
//on recupere le bouton login
const loginBtn = document.querySelector("label.login");
//on recupere le bouton signup
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
//au click sur le bouton signup
signupBtn.onclick = (() => {
    //deplacement du formulaire login 
    loginForm.style.marginLeft = "-50%";
    signup();
});
//au click sur le bouton login
loginBtn.onclick = (() => {
    //deplacement du formulaire login
    loginForm.style.marginLeft = "0%";
    //on appel la fonction pour recupérer et tester les données saisie par l'utilisateur
    login();
});
//au click sur le lien m'enregistre
signupLink.onclick = (() => {
    //on active le click sur signup
    signupBtn.click();
    return false;
});


/*-----------------------Recupération des inputs Login-----------------------------*/
const login = () => {
    let btnValidLogin = document.getElementById('btnValidLogin');
    let errorLogin = document.getElementById('error-login');

    //Ajout d'un evenement pour ecouter lors du clique sur le bouton commander
    btnValidLogin.addEventListener('click', (e) => {
        //on annule le comportement par defaut du bouton
        e.preventDefault();

        let emailLogin = document.getElementById('email-login').value;
        let passwordLogin = document.getElementById('password-login').value;
        console.log(emailLogin + " " + passwordLogin);

        if (emailLogin && passwordLogin !== null) {
            console.log("champs rempli");
        }
        else {
            errorLogin.textContent = "Adresse email et ou mot de passe manquant";
            errorLogin.style.color = "Red";
        }


    });

}


/*-------------------------Recupération des inputs Signup---------------------------------- */
const signup = () => {
    let btnValidSignup = document.getElementById('btnValidSignup');
   // let errorSignup = document.getElementById('error-signup');

    //Ajout d'un evenement pour ecouter lors du clique sur le bouton commander
    btnValidSignup.addEventListener('click', (e) => {
        //on annule le comportement par defaut du bouton
        e.preventDefault();
        let nameSignup = document.getElementById('name-signup').value;
        let firstnameSignup = document.getElementById('firstname-signup').value;
        let emailSignup = document.getElementById('email-signup').value;
        let passwordSignup = document.getElementById('password-signup').value;

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
            validateAddress(event.currentTarget);
        })
        //evenement password
        passwordSignup.addEventListener('input', (event) => {
            //on appel la fonction de validation
            validatePassword(event.currentTarget);
        })

    });

}