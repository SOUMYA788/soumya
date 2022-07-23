let navBtn = document.getElementById("navToggleBtn");
let navUl = document.getElementById("navUl");
let navBox = document.getElementById("navBox");
let navSpanOne = document.getElementsByClassName("navSpan")[0];
let navSpanTwo = document.getElementsByClassName("navSpan")[1];
let navSpanThree = document.getElementsByClassName("navSpan")[2];
console.log(navBox);

let okNav = (e) => {
    navBox.classList.toggle("displayHide");
    navBox.classList.toggle("displayFlex");
    navBox.classList.toggle("flexBox");
    navBox.classList.toggle("displayShow");

    navSpanOne.classList.toggle("navDash")
    navSpanTwo.classList.toggle("navDash")
    navSpanThree.classList.toggle("navDash")

    e.stopPropagation();
}