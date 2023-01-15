
let about = document.getElementById("about-section");
let values = document.getElementById("values-section");
let experience = document.getElementById("experience-section");
let project = document.getElementById("projects-section");
let aboutNav = document.getElementById("about-nav");
let valuesNav = document.getElementById("values-nav");
let expNav = document.getElementById("exp-nav");
let projectsNav = document.getElementById("projects-nav");

function onAboutHover(){
    aboutNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse');
}

function offAboutHover(){
    aboutNav.classList.remove("selected-nav");
    aboutNav.classList.remove("animate__animated");
    aboutNav.classList.remove("animate__pulse");
}

function aboutOnClick() {
    about.style.display = "";

    disableValues()
    disableExperience()
    disableProjects()
}

function onValuesHover(){
    valuesNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse');
}

function offValuesHover(){
    aboutNav.classList.remove("selected-nav");
    aboutNav.classList.remove("animate__animated");
    aboutNav.classList.remove("animate__pulse");
}

function valuesOnClick() {
    values.style.display = "flex";

    disableAbout()
    disableExperience()
    disableProjects()
}

function onExperienceHover(){
    expNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse');
}

function offValuesHover(){
    expNav.classList.remove("selected-nav");
    expNav.classList.remove("animate__animated");
    expNav.classList.remove("animate__pulse");
}

function experienceOnClick() {
    experience.style.display = "flex";

    disableAbout()
    disableValues()
    disableProjects()
}

function onProjectsHover(){
    projectsNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse');
}

function offValuesHover(){
    projectsNav.classList.remove("selected-nav");
    projectsNav.classList.remove("animate__animated");
    projectsNav.classList.remove("animate__pulse");
}

function projectsOnClick() {
    project.style.display = "flex";

    disableAbout()
    disableValues()
    disableExperience()
}

function disableAbout(){
    about.style.display = "none";
}

function disableValues(){
    values.style.display = "none";
}

function disableExperience(){
    experience.style.display = "none";
}

function disableProjects(){
    project.style.display = "none";
}