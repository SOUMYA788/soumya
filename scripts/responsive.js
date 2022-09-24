let navBtn = document.getElementById("navToggleBtn");
let navUl = document.getElementById("navUl")
let navLi = document.querySelectorAll(".navLi")

navBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navBtn.classList.toggle("navBtn");
    navUl.classList.toggle("navUl")
    navLi.forEach((link, index) => { 
        if (link.style.animation) {
            link.style.animation = "";
        }else{
            link.style.animation = `navLiAnim 0.5s ease forwards ${index / 5}s`
        }
    })
})

// name duration timing-function delay iteration-count direction fill-mode