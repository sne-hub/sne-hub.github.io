
function myFunction() {
  const element = document.getElementById("topNav");
  if (element.className === "topnav") {
    element.className += " responsive";
  } else {
    element.className = "topnav";
  }
}
const links = document.getElementsByTagName("a");
for (let i = 1; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    myFunction();
  });
}
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  container.style.display = "block";
  header.style.display = "none";
  const buttons= document.querySelectorAll(".button")
  buttons[1].addEventListener("click", () => {
    container.style.display = "none";
    header.style.display = "block";
  });
});

