'use strict'

// MENU PLEGABLE

var body = document.querySelector("#body");
var bars__menu = document.querySelector("#bars__menu");
var line1__bars = document.querySelector("#line1__bars-menu");
var line2__bars = document.querySelector("#line2__bars-menu");
var line3__bars = document.querySelector("#line3__bars-menu");
var menuLat = document.querySelector("#menuLat");
var menuImagen = document.querySelector("#menuImagen");


function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    
    bars__menu.classList.toggle("moverMenu");

    body.classList.toggle("overflow");
    menuLat.classList.toggle("mostrarMenuLateral");
    menuImagen.classList.toggle("mostrarMenuImagen");
}

bars__menu.addEventListener('click', animateBars);

