/***********************************Fonctions****************************************/
/*--------------------------fonction création d'éléments----------------------------*/
const create = (type, Qualified, nomType) => {
  let nomVariable = document.createElement(type);
  nomVariable.setAttribute(Qualified, nomType);
  return nomVariable;
}

/*-------------------------------Gestion validation ------------------------------- */
//Validation formulaire avant envoie des données au serveur

//fonction validation input
const validateInput = (value, regex, errorTag, iconTag, input, message) => {
  //condition de validation input
  if (value.length !== 0 && value.match(regex)) {
    errorTag.style.display = 'none';
    iconTag.style.backgroundColor = "#32CD32";
    input.style.border = "2px solid #32CD32";    
  }
  //condition non rempli, on affiche rouge et message d'erreur 
  else {
    errorTag.style.display = "contents";
    errorTag.textContent = value + " " + message;
    iconTag.style.backgroundColor = "red";
    input.style.border = "2px double red";
  }
}

//validation nom
const validateName = (inputName) => {
  let inputNameBorder = document.getElementById('lastName');
  let msgError = document.getElementById('error-name');
  let iconError = document.querySelector('.icon-name');
  const valueName = inputName.value.trim();

  //regex letters
  const letters = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueName, letters, msgError, iconError, inputNameBorder, "ne peut pas être un nom. veuillez saisir un nom valide uniquement avec des caracteres alphabétiques");
}


//validation prenom
const validateFirstName = (inputFirstName) => {
  let inputFirstnameBorder = document.getElementById('firstName');
  let msgErrorFirstname = document.getElementById('error-firstname');
  let iconErrorFirstname = document.querySelector('.icon-firstname');
  const valueFirstName = inputFirstName.value.trim();

  // creation regex letters
  const letters = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueFirstName, letters, msgErrorFirstname, iconErrorFirstname, inputFirstnameBorder, "ne peut pas être un prénom. veuillez saisir un prénom valide uniquement avec des caracteres alphabétiques");
}

//validation address
const validateAddress = (inputAddress) => {
  let inputAddressBorder = document.getElementById('address');
  let msgErrorAddress = document.getElementById('error-address');
  let iconErrorAddress = document.querySelector('.icon-address');
  const valueAddress = inputAddress.value.trim();

  //creation de la regex pour adresse
  const lettersNumbers = /^\d+\s[A-z]+\s[A-z]+/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueAddress, lettersNumbers, msgErrorAddress, iconErrorAddress, inputAddressBorder, "n'est pas une adresse valide. Format d'adresse attendu : 25 rue origino");

}

//validation city
const validateCity = (inputCity) => {
  let inputCityBorder = document.getElementById('city');
  let msgErrorCity = document.getElementById('error-city');
  let iconErrorCity = document.querySelector('.icon-city');
  const valueCity = inputCity.value.trim();

  //création de la regex letter 
  const letters = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zA-ZéèîïÉÈÎÏ]+)?$/;
  
  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueCity, letters, msgErrorCity, iconErrorCity, inputCityBorder, "ne peut pas etre une ville et ce champ ne peut rester vide.");
}

//Validation email
const validateEmail = (inputEmail) => {
  let inputEmailBorder = document.getElementById('email');
  let msgErrorEmail = document.getElementById('error-email');
  let iconErrorEmail = document.querySelector('.icon-email');
  const valueEmail = inputEmail.value.trim();

  //creation de la  regex mail
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //appel de la fonction validate input et on passe les parametres necessaire
  validateInput(valueEmail, mailFormat, msgErrorEmail, iconErrorEmail, inputEmailBorder, "ne peut pas etre un email. Format d'email attendu : contact@origino.fr");
}

/*------------------------Validation a l'envoi--------------------------*/
//récupération de l'espace message dans le html
const messageValidation = () => {
  return document.getElementById("message");
}

//Ajout d'un evenement sur le bouton commander et validation formulaire
const validateFormCart = () => {
  //récupération du bouton commander
  let buttonValider = document.getElementById("confirmer-panier");

  //Création de REGEX pour la validation
  //regex uniquement des lettre en minuscule et majuscule
  let regexLetter = /^[a-zA-ZéèçîïÉÈÎÏ]+([-'\s][a-zA-ZéèçîïÉÈÎÏ]+)?$/;

  //regex adresse chiffre et lettre sans caractére spéciaux
  //exemple attendu : 23 rue origino
  let regexAdd = /^\d+\s[A-z]+\s[A-z]+/;

  //regex email chiffre lettre @ 
  //exemple attendu: contact95@origino.fr
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //Ajout d'un evenement pour ecouter lors du clique sur le bouton commander
  buttonValider.addEventListener('click', (e) => {
    //on annule le comportement par defaut du bouton
    e.preventDefault();

    //Récuperation des inputs du formulaire
    //nom
    let inputName = document.getElementById('lastName');
    //prenom
    let inputFirstName = document.getElementById('firstName');
    //adresse
    let inputAddress = document.getElementById('address');
    //ville
    let inputCity = document.getElementById('city');
    //email
    let inputEmail = document.getElementById('email');

    //Validation des valeurs saisies dans les inputs avec nos regex
    //nom
    let testName = regexLetter.test(inputName.value);
    //prenom
    let testFirstname = regexLetter.test(inputFirstName.value);
    //adresse
    let testAddress = regexAdd.test(inputAddress.value);
    //ville
    let testCity = regexLetter.test(inputCity.value);
    //email
    let testMail = regexMail.test(inputEmail.value);

    //Les condition pour que la commande soit valider
    //tout les champs doivent etre true(vrai) a notre validation ci-dessus
    if (testName == true && testFirstname == true && testAddress == true && testCity == true && testMail == true) {
      messageValidation().innerText = "Commande valider";
      messageValidation().style.color = 'green';


      //appel de la fonction d'envoi des donnees
      ticket();
    }
    //sinon on envoie pas les données et on affiche un message d'erreur
    else {
      messageValidation().innerText = "Commande impossible, tout les champs doivent etre rempli et valide";
      messageValidation().style.color = 'red';
    }
  });
}
