let navBtn = document.getElementById("navToggleBtn");
let navUl = document.getElementById("navUl");
let navBox = document.getElementById("navBox");
let navSpanOne = document.getElementsByClassName("navSpan")[0];
let navSpanTwo = document.getElementsByClassName("navSpan")[1];
let navSpanThree = document.getElementsByClassName("navSpan")[2];

let navDashParent = undefined;

if (document.getElementsByClassName("navDash").length != 0) {
    navDashParent = document.getElementsByClassName("navDash")[1].parentElement;
}

if (navDashParent!=undefined) {
    
}




navBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navBox.classList.toggle("displayHide");
    navBox.classList.toggle("displayFlex");
    navBox.classList.toggle("flexBox");
    navBox.classList.toggle("displayShow");
    navSpanOne.classList.toggle("navDash")
    navSpanTwo.classList.toggle("navDash")
    navSpanThree.classList.toggle("navDash")
})