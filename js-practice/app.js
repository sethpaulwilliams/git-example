// using querySelector to select particular elements and change formatting
var navbar = document.querySelector("nav");
navbar.classList.add("navbar-dark");
navbar.classList.remove("navbar-light");
navbar.classList.add("bg-dark");
console.log(navbar.classList);


// using querySelectorAll to set all links to open in new tab
var links = document.querySelectorAll("a");
var newTab;
for (newTab = 0; newTab < links.length; newTab++) {
    links[newTab].target = "_blank";
};

// using textContent to change text of all card titles
var cardTitle = document.querySelectorAll(".card-title");
var cats;
for (cats = 0; cats < cardTitle.length; cats++) {
    cardTitle[cats].textContent = "Cats Cats Cats!";
};

// Changing the image of one of the cards
var image = document.querySelector("img");
image.src = "img/iceCreamCat.png";

// Using the event listener function + an alert function
function Danger() {
    var button = document.querySelector(".btn-danger");
alert("You shouldn't-a clicked that!");
}
var dangerButton = document.querySelector(".btn-danger");
dangerButton.addEventListener("click", Danger);

// Using input events
// var yoName = document.querySelector("text");
// yoName.addEventListener("input", function() {
//     console.log("Yo ", yoName.value);
// })

// Animating the Warning button
// var animateWarning = document.querySelector(".btn-warning");
// var animateButton = document.querySelector(".btn.warning");
// animateButton.addEventListener()


// Adding a new style class
// var p = document.querySelector("style");
// p.classList.add("my-style-class");
// console.log(p.className);
// p.style.backgroundColor = "CCCCCC";