
let about = document.getElementById("about-section");
let values = document.getElementById("values-section");
let experience = document.getElementById("experience-section");
let project = document.getElementById("projects-section");
let aboutNav = document.getElementById("about-nav");
let valuesNav = document.getElementById("values-nav");
let expNav = document.getElementById("exp-nav");
let projectsNav = document.getElementById("projects-nav");

function onAboutHover(){
    aboutNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse', 'animate__infinite');
}

function offAboutHover(){
    aboutNav.classList.remove("selected-nav");
    aboutNav.classList.remove("animate__animated");
    aboutNav.classList.remove("animate__pulse");
    aboutNav.classList.remove("animate__infinite");
}

function aboutOnClick() {
    about.style.display = "";

    disableValues()
    disableExperience()
    disableProjects()
}

function onValuesHover(){
    valuesNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse', 'animate__infinite');
}

function offValuesHover(){
    valuesNav.classList.remove("selected-nav");
    valuesNav.classList.remove("animate__animated");
    valuesNav.classList.remove("animate__pulse");
    valuesNav.classList.remove("animate__infinite");
}

function valuesOnClick() {
    values.style.display = "flex";

    disableAbout()
    disableExperience()
    disableProjects()
}

function onExperienceHover(){
    expNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse', 'animate__infinite');
}

function offExperienceHover(){
    expNav.classList.remove("selected-nav");
    expNav.classList.remove("animate__animated");
    expNav.classList.remove("animate__pulse");
    expNav.classList.remove("animate__infinite");
}

function experienceOnClick() {
    experience.style.display = "flex";

    disableAbout()
    disableValues()
    disableProjects()
}

function onProjectsHover(){
    projectsNav.classList.add("selected-nav", 'animate__animated', 'animate__pulse', 'animate__infinite');
}

function offProjectsHover(){
    projectsNav.classList.remove("selected-nav");
    projectsNav.classList.remove("animate__animated");
    projectsNav.classList.remove("animate__pulse");
    projectsNav.classList.remove("animate__infinite");
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