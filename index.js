function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.onscroll = function() {myFunction()};

const topNav = document.getElementById("navbar");
const sticky = topNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topNav.classList.add("sticky")
  } else {
    topNav.classList.remove("sticky");
  }
}