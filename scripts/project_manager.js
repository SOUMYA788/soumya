
let projectBox = document.getElementById("projectBox");

const projects = [
    {
        id: 1,
        NAME: "calculator",
        image: "./images/project_images/01.png",
        web_url: "https://soumya788.github.io/calculator/",
        desc: "A simple web based calculator with performance of all basic mathametical operations."
    },
    {
        id: 2,
        NAME: "clock",
        image: "./images/project_images/02.png",
        web_url: "https://soumya788.github.io/dual-clock/",
        desc: "Combination of Analog and Digital clock with neomorphism effect"
    },
    {
        id: 3,
        NAME: "calender",
        image: "./images/project_images/03.png",
        web_url: "https://soumya788.github.io/calender/",
        desc: "A Simple Web Based Calender"
    }
]


for (const project in projects) {
    console.log(project);
    console.log(projects[project].image);
    console.log(project.web_url);

    let projectDiv = document.createElement("div") // item holder
    let projectID = document.createElement("p")    // ID of Project
    let projectImg = document.createElement("img")  // Project IMAGE
    let projectName = document.createElement("h1")  // Project name
    let projectUrl = document.createElement("a")    // Project URL Link
    let projectUrlHolder = document.createElement("p")  // Project Link Holder
    let projectDesc = document.createElement("p")   // Project Description

    projectDiv.classList.add("projects") // classlist added
    projectImg.setAttribute("src", projects[project].image)
    projectUrl.setAttribute("href", projects[project].web_url)
    projectUrl.setAttribute("target", "_blank")
    projectID.setAttribute("class", "assignNum")
    projectDesc.setAttribute("class", "desc")
    projectUrlHolder.setAttribute("class", "link")

    projectID.innerText = projects[project].id
    projectName.innerText = projects[project].NAME
    projectUrl.innerText = `click here to visit`
    projectDesc.innerText = projects[project].desc

    projectUrlHolder.appendChild(projectUrl)

    projectDiv.appendChild(projectID)
    projectDiv.appendChild(projectImg)
    projectDiv.appendChild(projectName)
    projectDiv.appendChild(projectDesc)
    projectDiv.appendChild(projectUrlHolder)

    projectBox.appendChild(projectDiv);

}