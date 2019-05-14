var navbar = document.querySelector("nav");
navbar.classList.add("navbar-light");
navbar.classList.remove("navbar-dark");
navbar.classList.remove("bg-dark");
console.log(navbar.classList);

var mainHeader = document.querySelector(".jumbotron h1");
console.log(mainHeader.textContent);
mainHeader.textContent = "Hello, INFX 512";

function helloName() {
    var input = document.querySelector(".form-control");
    alert("Hello, " + input.value);
}

var searchButton = document.querySelector("party");

searchButton.addEventListener("click", helloName);