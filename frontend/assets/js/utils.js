/***********************************Fonctions****************************************/
/*--------------------------fonction création d'éléments----------------------------*/
const create = (type, Qualified, nomType) => {
  let nomVariable = document.createElement(type);
  nomVariable.setAttribute(Qualified, nomType);
  return nomVariable;
}




/*--------------------------Effet switch login / signup-------------------------------- */
const effectSwitch = () => {
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
  });
  //au click sur le bouton login
  loginBtn.onclick = (() => {
    //deplacement du formulaire login
    loginForm.style.marginLeft = "0%";
  });
  //au click sur le lien m'enregistre
  signupLink.onclick = (() => {
    //on active le click sur signup
    signupBtn.click();
    return false;
  });
}
/*-----------------------------------Gestion validation --------------------------------- */
/*--------------------------Validation en live du formulaire SIGNUP-----------------------*/

//fonction validation input
const validateInput = (value, regex, errorTag, iconTag, input, message) => {
  //condition de validation input
  if (value.length !== 0 && value.match(regex)) {
    errorTag.style.display = 'none';
    iconTag.style.color = "#32CD32";
    input.style.border = "2px solid #32CD32";
  }
  //condition non rempli, on affiche rouge et message d'erreur 
  else {
    errorTag.style.display = "contents";
    errorTag.style.fontSize = "0.72em";
    errorTag.style.color = "red";
    errorTag.textContent = message;
    iconTag.style.color = "red";
    input.style.border = "2px double red";
  }
}

//validation nom
const validateName = (nameSignup) => {
  let inputNameBorder = document.getElementById('name-signup');
  let msgError = document.getElementById('error-name');
  let iconError = document.querySelector('.icon-name');
  const valueName = nameSignup.value.trim();

  //regex letters
  const letters = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueName, letters, msgError, iconError, inputNameBorder, "Veuillez saisir un nom valide.");
}


//validation prenom
const validateFirstName = (firstnameSignup) => {
  let inputFirstnameBorder = document.getElementById('firstname-signup');
  let msgErrorFirstname = document.getElementById('error-firstname');
  let iconErrorFirstname = document.querySelector('.icon-firstname');
  const valueFirstName = firstnameSignup.value.trim();

  // creation regex letters
  const letters = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueFirstName, letters, msgErrorFirstname, iconErrorFirstname, inputFirstnameBorder, "Veuillez saisir un prénom valide.");
}

//Validation email
const validateEmail = (emailSignup) => {
  let inputEmailBorder = document.getElementById('email-signup');
  let msgErrorEmail = document.getElementById('error-email');
  let iconErrorEmail = document.querySelector('.icon-email');
  const valueEmail = emailSignup.value.trim();

  //creation de la  regex mail
  const mailFormat = /^[a-z0-9ç_-]+@groupomania\.fr$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueEmail, mailFormat, msgErrorEmail, iconErrorEmail, inputEmailBorder, "Format d'email attendu: @groupomania.fr");
}

//validation Password
const validatePassword = (passwordSignup) => {
  let inputPasswordBorder = document.getElementById('password-signup');
  let msgErrorPassword = document.getElementById('error-password');
  let iconErrorPassword = document.querySelector('.icon-password');
  const valuePassword = passwordSignup.value.trim();

  //creation de la regex pour adresse
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valuePassword, passRegex, msgErrorPassword, iconErrorPassword, inputPasswordBorder, "Le mot de passe doit contenir majuscule, minuscule, chiffre et 1 caractére speciaux");

}

/*--------------------------Validation en live formulaire LOGIN---------------------------*/
//Validation email
const validateEmailLogin = (emailLogin) => {
  let inputEmailBorder = document.getElementById('email-login');
  let msgErrorEmail = document.getElementById('error-emailLogin');
  let iconErrorEmail = document.querySelector('.icon-emailLogin');
  const valueEmailLogin = emailLogin.value.trim();

  //creation de la  regex mail
  const mailFormat = /^[a-z0-9ç_-]+@groupomania\.fr$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueEmailLogin, mailFormat, msgErrorEmail, iconErrorEmail, inputEmailBorder, "Format d'email attendu: @groupomania.fr");
}

//validation Password
const validatePasswordLogin = (passwordLogin) => {
  let inputPasswordBorder = document.getElementById('password-login');
  let msgErrorPassword = document.getElementById('error-passwordLogin');
  let iconErrorPassword = document.querySelector('.icon-passwordLogin');
  const valuePassword = passwordLogin.value.trim();

  //creation de la regex pour adresse
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valuePassword, passRegex, msgErrorPassword, iconErrorPassword, inputPasswordBorder, "Le mot de passe contient majuscule, minuscule, chiffre et 8 caractere minimum");

}

/*------------------------Fonction de recuperation de la balise message------------------ */

//récupération de l'espace message dans le html
const messageValidation = () => {
  return document.getElementById("message");
}


/*------------------------Validation a l'envoi formulaire SIGNUP--------------------------*/

//Ajout d'un evenement sur le bouton m'enregistrer et validation du formulaire
const validateFormSignup = () => {
  //récupération du bouton m'enregistrer
  let buttonSignup = document.getElementById("btnValidSignup");

  //Création de REGEX pour la validation
  //regex uniquement des lettre en minuscule et majuscule
  let regexLetter = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //regex email chiffre lettre @ 
  //exemple attendu: @groupomania.fr
  let regexMail = /^[a-z0-9ç_-]+@groupomania\.fr$/;

  //regex password
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //Ajout d'un evenement pour ecouter lors du clique sur le bouton m'enregistrer
  buttonSignup.addEventListener('click', (e) => {
    //on annule le comportement par defaut du bouton
    e.preventDefault();

    //Récuperation des inputs du formulaire SIGNUP
    //nom
    let inputName = document.getElementById('name-signup');
    //prenom
    let inputFirstName = document.getElementById('firstname-signup');
    //email
    let inputEmail = document.getElementById('email-signup');
    //password
    let inputPassword = document.getElementById('password-signup');


    //Validation des valeurs saisies dans les inputs avec nos regex
    //nom
    let testName = regexLetter.test(inputName.value);
    //prenom
    let testFirstname = regexLetter.test(inputFirstName.value);
    //email
    let testEmail = regexMail.test(inputEmail.value);
    //password
    let testPassword = regexPassword.test(inputPassword.value);


    //Les condition pour que l'inscription soit valider
    //tout les champs doivent etre true(vrai) a notre validation ci-dessus
    if (testName == true && testFirstname == true && testEmail == true && testPassword == true) {
      messageValidation().innerText = "Inscription valider";
      messageValidation().style.color = 'green';

      //on valide donc on envoie les infos au serveur
      console.log("on envoie les donnees au serveur")
      console.log(inputName.value + " " + inputFirstName.value + " " + inputEmail.value + " " + inputPassword.value);
    }
    //sinon on envoie pas les données et on affiche un message d'erreur
    else {
      messageValidation().textContent = "Inscription impossible, tout les champs doivent etre rempli et valide";
      messageValidation().style.color = 'red';
    }
  });
}

/*-------------------------Validation à l'envoi du formulaire LOGIN---------------------- */

const validateFormLogin = () => {
  let buttonLogin = document.getElementById("btnValidLogin");
  let errorLogin = document.getElementById("error-login");

  //Création de REGEX pour la validation

  //regex email chiffre lettre @ 
  //exemple attendu: @groupomania.fr
  let regexMail = /^[a-z0-9ç_-]+@groupomania\.fr$/;

  //regex password
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //Ajout d'un evenement pour ecouter lors du clique sur le bouton m'enregistrer
  buttonLogin.addEventListener('click', (e) => {
    //on annule le comportement par defaut du bouton
    e.preventDefault();

    //Récuperation des inputs du formulaire LOGIN
    //email
    let inputEmail = document.getElementById('email-login');
    //password
    let inputPassword = document.getElementById('password-login');

  //Validation des valeurs saisies dans les inputs avec nos regex
    //email
    let testEmail = regexMail.test(inputEmail.value);
    //password
    let testPassword = regexPassword.test(inputPassword.value);


        //Les condition pour que l'inscription soit valider
    //tout les champs doivent etre true(vrai) a notre validation ci-dessus
    if (testEmail == true && testPassword == true) {
      errorLogin.innerText = "Connecter";
      errorLogin.style.color = 'green';

      //on valide donc on envoie les infos au serveur
      console.log("on envoie les donnees au serveur")
      console.log(inputEmail.value + " " + inputPassword.value);
    }
    //sinon on envoie pas les données et on affiche un message d'erreur
    else {
      errorLogin.textContent = "Connexion impossible, tout les champs doivent etre rempli et valide";
      errorLogin.style.color = 'red';
    }
  });
}