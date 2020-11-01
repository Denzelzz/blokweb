// button in de nav die het menu moet gaan openen en sluiten
var deButton = document.querySelector("nav ul:first-of-type li:first-of-type");

// het hamburgermenu
var menu = document.querySelector("nav ul:nth-of-type(2)");

deButton.addEventListener("click", function () {
  //via deze functie moet de class "toonMenu" het menu tevoorschijn halen.
   menu.classList.toggle("toonMenu");
});