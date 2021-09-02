/*
const signup = () => {
    let btnSignup = document.getElementById('signup');
    let btnLogin = document.getElementById('login');

    //ajout d'un evenement pour ecouter le click sur le bouton signup
    btnLogin.addEventListener("click", function (e) {
        e.preventDefault();
        //code a executer au click
        console.log("login");
    });
}*/

/*----------------------------Creation de la vue des ajout de post------------------------------ */

const sectionAddPost = () => {
    //on attrape l'element content-app ou doit etre injecter le code
    let contentApp = document.getElementById('content-app');

    //Partie Ajouter un post
    let addPostSection = create('section', 'id', 'addPost');
    let addPostContainer = create('div', 'class', 'addPostContainer');
    //title
    let titlePostContainer = create('div', 'class', 'titlePostContainer');
    let labelTitle = create('label', 'for', 'titlePost');
    let addPostTitle = create('input', 'id', 'titlePost');
    //content
    let contentPostContainer = create('div', 'class', 'contentPostContainer');
    let labelContent = create('label', 'for', 'textContent');
    let addPostContent = create('input', 'id', 'textContent');
    //image 
    let imagePostContainer = create('div', 'class', 'imagePostContainer');
    let labelImage = create('label', 'for', 'imagePost');
    let addImagePost = create('input', 'id', 'imagePost');

    //Bouton Valider l'ajout du post
    let btnAddPost = create('button', 'id', 'btnAddPost');

    //HIERARCHISATION
    //Partie add post
    contentApp.appendChild(addPostSection);
    addPostSection.appendChild(addPostContainer);
    addPostContainer.appendChild(titlePostContainer);
    addPostContainer.appendChild(contentPostContainer);
    addPostContainer.appendChild(imagePostContainer);
    addPostContainer.appendChild(btnAddPost);
    titlePostContainer.appendChild(labelTitle);
    titlePostContainer.appendChild(addPostTitle);
    contentPostContainer.appendChild(labelContent);
    contentPostContainer.appendChild(addPostContent);
    imagePostContainer.appendChild(labelImage);
    imagePostContainer.appendChild(addImagePost);

}


/*--------------------------------Vue des Posts---------------------------*/

const createViewAllPost = () => {
    let changeBtn = document.getElementById('actu');

    changeBtn.innerHTML = ""

}