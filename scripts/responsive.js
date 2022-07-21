let navBtn = document.getElementById("navToggleBtn");
let navUl = document.getElementById("navUl");
let navBox = document.getElementById("navBox");
console.log(navBox);

let okNav = () => {
    navBox.classList.toggle("displayHide");
    navBox.classList.toggle("displayFlex");
    navBox.classList.toggle("flexBox");
    navBox.classList.toggle("displayShow");
}