
/*--------------------Initialisation de la requete -----------------------*/
//requete de reception de données
const getRequest = async (url) => {
    const response = await fetch(url);
    //renvoi la reponse
    return await response.json();
}

//requete d'envoi de données
const postRequest = async (url, options) => {
    const response = await fetch(url, options);
    //verification du status de l'envoi (condition)
    if (response.status === 200, 201) {
        //renvoie la reponse
        return await response.json();
    }
    //si la condition n'est pas bonne
    else {
        //
        
    }
}


