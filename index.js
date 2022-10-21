const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const home = document.querySelectorAll(".home")
const button = document.getElementById("button")
const otherSpans= document.querySelectorAll(".container")
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    otherSpans[0].style.display="block"

})
document.querySelectorAll(".nav-link").forEach(element=>{
    element.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        otherSpans[0].style.display="block"

    } )
})
button.addEventListener("click", ()=>{
    otherSpans[0].style.display="block"
})