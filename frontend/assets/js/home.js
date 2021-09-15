

const token = sessionStorage.getItem("userToken");
const userId = sessionStorage.getItem("userId");
let postsPage = document.getElementById('posts_page');
let errorContainer = document.getElementById('error-message');
let titleError = create('h1', 'class', 'title-error');
let messageError = create('p', 'class', 'text-error');


if (token === null && userId === null) {
  console.log("vous n'etes pas connecter");
  //on desactive laffichage de la page
  postsPage.style.display = "none";


  //on active laffichage de la balise error
  errorContainer.style.display = "block";
  errorContainer.style.textAlign ="center";
  //on creer le message qui sera passer dans la balise error
  let titleError = create('h1', 'class', 'title-error');//titre
  let messageError = create('p', 'class', 'text-error');//message
  let buttonError = create ('button', 'onClick', "window.location.href='index.html'");//bouton redirection connexion

  //hierarchisation
  errorContainer.appendChild(titleError);
  errorContainer.appendChild(messageError);
  errorContainer.appendChild(buttonError);

  //attribution données ou message
  titleError.textContent = 'Espace reservé';
  messageError.textContent ='Vous devez etre connecter pour accéder a cet page';
  buttonError.textContent = 'Me connecter';

}

const signout = () => {
  let btnSignout = document.getElementById('signout');

  btnSignout.addEventListener('click', (e) =>{
    e.preventDefault();
    sessionStorage.clear();
    alert("Vous êtes désormais déconnecter. A bientôt");
    window.location.href='index.html';
    
  })
}

signout();

/*
const home = () => {
  //on appelle la fonction pour fixer l'header


  //fonction addPicture
  const addPicture = () => {
    //on recupere le bouton ajouter une photo
    let btnPicture = document.getElementById('add-picture');
    //on recupere le fontawesome close
    let btnClosePictureInput = document.querySelector('.close-pictureInput');
    //on recupere l'input ajouter une photo
    let input = document.getElementById('add-pictureInput');

    //on ajoute un evenement click au bouton addPost
    btnPicture.addEventListener('click', (e) => {
      //on annule le comportement par defaut(redirection)
      e.preventDefault();
      //on change le display en block pour afficher l'input
      input.style.display = "block";
    });
    //on ajoute un evenement click au bouton close
    btnClosePictureInput.addEventListener('click', (e) => {
      //on annule le comportement par defaut(redirection)
      e.preventDefault();
      //on change le display en none pour cacher l'input
      input.style.display = "none";
    });

  }
  //on appelle la fonction addPicture
  addPicture();

  //fonction ajout de post
  const addPost = () => {
    //on recupere le bouton partager
    let btnPost = document.getElementById('share');
    //on ajoute un evenement click au bouton share
    btnPost.addEventListener('click', (e) => {
      //on annule le comportement par defaut(redirection)
      e.preventDefault();

      //on recupere les donnees
      //titre du poste
      let titlePost = document.getElementById('addPostTitle').value;
      //message
      let content = document.getElementById('addPostContent').value;
      //picture

      //test console
      console.log(titlePost + " " + content);
      console.log("post ajouter");
    })
  }
  //on appelle la fonction ajout de post
  addPost();
}


const listePost = () => {
  const posts = getRequest("http://localhost:3000/api/messages");
  posts
      //on a une promesse avec des donnees produits
      .then((posts) => {
          //création d'une boucle pour recuperer chaque produit un par un
          posts.forEach((post) => {
              //on appel la view createProduct pour afficher la page index et on lui passe chaque produit
              postsView(post)
          })
      })
      //la promesse n'a pas abouti
      .catch((error) => {
          //affichage de l'erreur
          console.log(error);
      })
}
listePost();*/