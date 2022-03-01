function myFunction() {
    let x = document.getElementById("topNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const links = document.getElementsByTagName("a")
for(let i = 1; i< links.length ; i++){
    links[i].addEventListener("click", function(){
        myFunction()
    })
}