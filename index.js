const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const home = document.querySelectorAll(".home")
const otherSpans= Array(document.querySelectorAll(".container")[0].children)
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(element=>{
    element.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    } )
})
