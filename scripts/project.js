class Project {
    constructor(id, title, description, image, links){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.links = links;
        this.createPage();
    }
    createPage(){

    }
}

/* const queryStringUrlId = window.location.search;
const idPage = queryStringUrlId.slice(1); // Aller chercher le numéro de projet

<a href="project.html?'+this.id+'"></a> // Va poser le numéro de projet dans l'url */