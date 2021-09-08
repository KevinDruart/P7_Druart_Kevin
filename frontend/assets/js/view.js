/*----------------------------Creation de la vue des posts------------------------------ */

const postsView = (post) => {
    //on attrape l'element content-app ou doit etre injecter le code
    let contentApp = document.getElementById('post');

    //Top
    let topPostContainer = create('div', 'class', 'post__top');
    let avatar = create('img', 'class', 'user__avatar post__avatar');
    let userInfoPost = create('div', 'class', 'post__topInfo');
    let userPost = create('h2', 'class', 'post__user');
    let timePost = create('p', 'class', 'post__time');

    //Content
    let contentPostContainer = create('div', 'class', 'post__bottom');
    let titlePost = create('h3', 'class', 'post__title');
    let imgPostContent = create("img", "src", data.imageUrl);
    let contentPost = create('p', 'class', 'post__content');


    //Option
    let OptionsPostContainer = create('div', 'class', 'post__options');
    let likePostContainer = create('div', 'class', 'post__option');
    let iconLike = create('i', 'class', 'far fa-thumbs-up');
    let dislikePostContainer = create('div', 'class', 'post__option');
    let iconDislike = create('i', 'class', 'far fa-thumbs-down');
    let commentsPostContainer = create('div', 'class', 'post__option');
    let iconComments = create('i', 'class', 'far fa-comments');

    /*-------------------HIERARCHISATION--------------------*/
    //Partie add post
    contentApp.appendChild(topPostContainer);

    //top
    topPostContainer.appendChild(avatar);
    postContainer.appendChild(userInfoPost);
    userInfoPost.appendChild(userPost);
    userInfoPost.appendChild(timePost);

    //contents
    topPostContainer.appendChild(contentPostContainer);
    contentPostContainer.appendChild(titlePost);
    contentPostContainer.appendChild(imgPostContent);
    contentPostContainer.appendChild(contentPost);

    //options
    topPostContainer.appendChild(OptionsPostContainer);
    OptionsPostContainer.appendChild(likePostContainer);
    likePostContainer.appendChild(iconLike);
    OptionsPostContainer.appendChild(dislikePostContainer);
    dislikePostContainer.appendChild(iconDislike);
    OptionsPostContainer.appendChild(commentsPostContainer);
    commentsPostContainer.appendChild(iconComments);

        //recuperation de la date
        let dateNow = new Date();
        //transformation de la date actuel en date locale France
        let dateLocale = dateNow.toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        //Attribution des données aux élements créees
        //top
        userPost.textContent = user.name;
        timePost.textContent = dateLocale;

        //contents
        titlePost.textContent = post.title;
        contentPost.textContent = post.content;
        

}


