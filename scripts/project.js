class Project {
    constructor(id, title, description, links){
        this.id = id;
        this.title = title;
        this.description = description;
        this.links = links;
        this.createPage();
    }
    createPage(){

        var adapt = document.createElement ("div")
        var Name= document.getElementById("project");
        var inner1 = '<h2 class="title pt-4"><u>'+this.title+'</u></h2>\
                    <div class="row" id="description">\
                        <p class="description">'+this.description+'</p>\
                    </div>\
                    <div class="row" id="imagelien">\
                        <div class="col-6">\
                            <img class="imageProject" src="images/project'+this.id+'.png" alt="project'+this.id+'">\
                        </div>\
                        <div class="col-6" id="links">\
                            <p><a href="'+this.links[0]+'">Github Link</a></p>';
                        if(this.links[1] == ""){
                            inner1 = inner1 + '<p class="d-none"><a href="'+this.links[1]+'">See it live</a></p>\
                            <p><a href="projects.html">Return to projects</a></p>\
                            </div>\
                            </div>';
                        }  else {
                            inner1 = inner1 + '<p><a href="'+this.links[1]+'">See it live</a></p>\
                            <p><a href="projects.html">Return to projects</a></p>\
                            </div>\
                        </div>';
                        }
                    adapt.innerHTML = inner1; 
                    Name.appendChild(adapt);
    }
    
}

const queryStringUrlId = window.location.search;
const idPage = queryStringUrlId.slice(1);

const description1 = "This project was done during my formation with OpenClassrooms. I had to create a reactive website for a hotel reservation website using only HTML and CSS";
const title1 = "Turn Mock-ups Into a Web Page with HTML & CSS";
const links1 = ["https://github.com/Clement-Nyiri/ClementNyiri_2_28122020","https://clement-nyiri.github.io/ClementNyiri_2_28122020"];

const description2 = "This project was done during my formation with OpenClassrooms. My goal was to create a reactive website for a restaurant booking company using a model, the keypoint here was to make every animation as it was on the models, except for the loading one, which was up to me to create";
const title2 = "Integrate a mobile website with animations in CSS";
const links2 = ["https://github.com/Clement-Nyiri/ClementNyiri_3_17022021","https://clement-nyiri.github.io/ClementNyiri_3_17022021"];

const description3 = "This project was done during my formation with OpenClassrooms. The goal was to optimise the SEO part of the website, and find all bad practices made during the creation of the website (contrast, responsive design, W3C checks, etc..)<br/> NB: I cannot show the poorly made website, so I will link the corrected versions ";
const title3 = "Optimise an existing website";
const links3 = ["https://github.com/Clement-Nyiri/Clement_Nyiri_4_21032021","https://clement-nyiri.github.io/Clement_Nyiri_4_21032021_v2"];

const description4 = "This project was done during my formation with OpenClassrooms. Using only a few instructions given, I had to create the frontend part of an e-commerce website, accessing the APi using promises. I used Bootstrap as a frontend framework, and vanilla JavaScript. After that, I had to create a test plan showing how the application should be used. <br/> NB: I cannot really show the website since it uses an API.";
const title4 = "Build an e-commerce Website with JavaScript";
const links4 = ["https://github.com/Clement-Nyiri/P5_OPC_Construisez-un-site-e-commerce",""];

const description5 = "This project was done during my formation with OpenClassrooms. Since the frontend part of this one was already created, I had to make a really secured API, using the Express framework, MongoDB for the database, Mongoose for the error handling and Node.js for the server. The API had to be perfectly compatible with the frontend already made";
const title5 = "Build a Secure API for a Review App";
const links5 = ["https://github.com/Clement-Nyiri/Projet_6_OpenClassroom_Clement_Nyiri",""];

const description6 = "This project was done during my formation with OpenClassrooms. For this project, I had to create, from scratch, a social network for a company. I used Bootstrap as my frontend framework, MySQL Server to run my database, an API made with Express (and SQL to communicate with the database) as well as vanilla JavaScript for the frontend. Everything is secured using authentification and error handling.";
const title6 = "Build a Full-Stack Solution";
const links6 = ["https://github.com/Clement-Nyiri/Projet_7_OPC",""];

if(idPage == 1){
    new Project(idPage, title1, description1, links1);
} else if(idPage == 2){
    new Project(idPage, title2, description2, links2);
} else if(idPage == 3){
    new Project(idPage, title3, description3, links3);
} else if(idPage == 4){
    new Project(idPage, title4, description4, links4);
} else if(idPage == 5){
    new Project(idPage, title5, description5, links5);
} else if(idPage == 6){
    new Project(idPage, title6, description6, links6);
} else{
    alert('This project does not exist... yet :)\
    You will be redirect to the home page')
    window.location.replace("index.html");
}