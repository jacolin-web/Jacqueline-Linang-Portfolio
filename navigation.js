function getSections(){
    var about = document.getElementById("about-section");
    var values = document.getElementById("values-section");
    var experience = document.getElementById("experience-section");
    var project = document.getElementById("projects-section");

    return {about, values, experience, project}
}

function aboutOnClick() {
    let {about, values, experience, project} = getSections()

    about.style.display = "";
    values.style.display = "none";
    experience.style.display = "none";
    project.style.display = "none";
}

function valuesOnClick() {
    let {about, values, experience, project} = getSections()

    values.style.display = "flex";
    about.style.display = "none";
    experience.style.display = "none";
    project.style.display = "none";
}

function experienceOnClick() {
    let {about, values, experience, project} = getSections()

    experience.style.display = "flex";
    values.style.display = "none";
    about.style.display = "none";
    project.style.display = "none";
}

function projectsOnClick() {
    let {about, values, experience, project} = getSections()

    project.style.display = "flex";
    about.style.display = "none";
    experience.style.display = "none";
    values.style.display = "none";
}