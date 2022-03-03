function myFunction() {
    const element = document.getElementById("topNav");
    if (element.className === "topnav") {
        element.className += " responsive";
    } else {
        element.className = "topnav";
    }
}
const links = document.getElementsByTagName("a")
for(let i = 1; i< links.length ; i++){
    links[i].addEventListener("click", function(){
        myFunction()
    })
}