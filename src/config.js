let softwarenaam = "MP Fooi";
var softwareversie = "v3.5";

let printversie = document.getElementById("versie");
printversie.innerHTML = softwareversie;

let printsoftwarenaam = document.getElementById("softwaretitle");
printsoftwarenaam.innerHTML = softwarenaam;

let title = document.getElementById("name");
title.innerHTML = softwarenaam + " " + softwareversie;

var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

if (screenWidth < 300 || screenHeight < 702) {
    alert("Deze website is niet geschikt voor mobiele apparaten met een schermgrootte kleiner dan 300x702 pixels. Uw schermgrootte is: " + screenWidth + "x" + screenHeight + " pixels. (En dus niet geschikt voor deze applicatie)");
    window.location.href = "https://www.google.com";
} else if (screenHeight < 702){
    alert("Deze website is niet geschikt voor mobiele apparaten met een schermgrootte kleiner dan 300x702 pixels. Uw schermgrootte is: " + screenWidth + "x" + screenHeight + " pixels. (En dus niet geschikt voor deze applicatie)");
    window.location.href = "https://www.google.com";
} else if (screenWidth < 300){
    alert("Deze website is niet geschikt voor mobiele apparaten met een schermgrootte kleiner dan 300x702 pixels. Uw schermgrootte is: " + screenWidth + "x" + screenHeight + " pixels. (En dus niet geschikt voor deze applicatie)");
    window.location.href = "https://www.google.com";
}