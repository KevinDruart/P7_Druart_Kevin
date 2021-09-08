const home = () => {
  //on appelle la fonction pour fixer l'header
  headerFixed();
  
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

//on appelle la fonction Home qui contient la page
home();


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
listePost();