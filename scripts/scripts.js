'use strict'




// PALÍNDROMO

var contRptRtdPal = document.querySelector("#contRptRtdPal");
var secPal = document.querySelector("#secPal");
var respuestaPal = document.querySelector("#respuestaPal");
var resultadoPal = document.querySelector("#resultadoPal");
var btnValPal = document.querySelector("#btnValPal");


function palindromo(texto) {

    respuestaPal.innerHTML = "Respuesta: ";
    contRptRtdPal.classList.toggle("mostrarContRptRtd");

    // CAMBIAR EL NOMBRE DEL BOTON VALIDAR Y BORRAR
    if (contRptRtdPal.className !== "contRptRtd") {
        btnValPal.value = "Borrar";

    } else if (contRptRtdPal.className == "contRptRtd") {
        btnValPal.value = "Validar";
        secPal.value = "";
    }


    // OPERACIÓN
    if (texto == null || texto.length == 0 || texto == "") {
        resultadoPal.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";
    } else if (!isNaN(texto)) {
        resultadoPal.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";
    } else {

        let array = texto.split("");
        let reverse = array.reverse();

        return texto == reverse.join("") ? resultadoPal.innerHTML = "El texto ingresado si es un palíndromo" : resultadoPal.innerHTML = "El texto ingreado no es un palíndromo";
    }
}


btnValPal.addEventListener('click', function () {

    palindromo(secPal.value);
});




// NÚMERO MAYOR

var contRptRtdNums = document.querySelector("#contRptRtdNums");
var secNum1 = document.querySelector("#secNum1");
var secNum2 = document.querySelector("#secNum2");
var respuestaNums = document.querySelector("#respuestaNums");
var resultadoNums = document.querySelector("#resultadoNums");
var btnValNums = document.querySelector("#btnValNums");


function numeroMayor(numero1, numero2) {

    respuestaNums.innerHTML = "Respuesta: ";
    contRptRtdNums.classList.toggle("mostrarContRptRtd");

    // CAMBIAR EL NOMBRE DEL BOTON VALIDAR Y BORRAR
    if (contRptRtdNums.className !== "contRptRtd") {
        btnValNums.value = "Borrar";

    } else if (contRptRtdNums.className == "contRptRtd") {
        btnValNums.value = "Validar";
        secNum1.value = "";
        secNum2.value = "";
    }


    // OPERACIÓN
    if (numero1 == "" && numero2 == "") {
        resultadoNums.innerHTML = "ERROR: Los campos están vacíos, debe ingresar un número en ambos campos.";

    } else if (numero1 == "" || numero2 == "") {
        resultadoNums.innerHTML = "ERROR: Debe ingresar un valor en ambos campos.";

    } else if (isNaN(numero1) || isNaN(numero2)) {
        resultadoNums.innerHTML = "ERROR: Debe ingresar un número.";
    } else if (numero1 == numero2) {
        resultadoNums.innerHTML = "Ambos números son iguales.";
    } else if (numero1 > numero2) {
        resultadoNums.innerHTML = "El primer número ingresado es mayor que el segundo número ingresado.";
    } else {
        resultadoNums.innerHTML = "El segundo número ingresado es mayor que el primer número ingresado.";
    }
}


btnValNums.addEventListener('click', function () {

    numeroMayor(secNum1.value, secNum2.value);
});



//VOCALES

var contRptRtdVoc = document.querySelector("#contRptRtdVoc");
var secVoc = document.querySelector("#secVoc");
var respuestaVoc = document.querySelector("#respuestaVoc");
var resultadoVoc = document.querySelector("#resultadoVoc");
var btnValVoc = document.querySelector("#btnValVoc");


function vocales(texto) {

    respuestaVoc.innerHTML = "Respuesta: ";
    contRptRtdVoc.classList.toggle("mostrarContRptRtd");

    // CAMBIAR EL NOMBRE DEL BOTON VALIDAR Y BORRAR
    if (contRptRtdVoc.className !== "contRptRtd") {
        btnValVoc.value = "Borrar";

    } else if (contRptRtdVoc.className == "contRptRtd") {
        btnValVoc.value = "Validar";
        secVoc.value = "";
    }


    // OPERACIÓN
    if (texto == null || texto.length == 0 || texto == "") {
        resultadoVoc.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";
    } else if (!isNaN(texto)) {
        resultadoVoc.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";
    } else {

        let contadorVocales = "| ";
        let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];

        for (let i = 0; i < texto.length; i++) {

            if (vocales.indexOf(texto[i]) >= 0) {
                contadorVocales = contadorVocales + texto[i] + " | ";
            }
        }

        return resultadoVoc.innerHTML = contadorVocales;
    }
}


btnValVoc.addEventListener('click', function () {

    vocales(secVoc.value);
});



// NÚMERO DE VOCALES

var contRptRtdNumVoc = document.querySelector("#contRptRtdNumVoc");
var secNumVoc = document.querySelector("#secNumVoc");
var respuestaNumVoc = document.querySelector("#respuestaNumVoc");
var resultadoNumVoc = document.querySelector("#resultadoNumVoc");
var resultadoVocA = document.querySelector("#resultadoVocA");
var resultadoVocE = document.querySelector("#resultadoVocE");
var resultadoVocI = document.querySelector("#resultadoVocI");
var resultadoVocO = document.querySelector("#resultadoVocO");
var resultadoVocU = document.querySelector("#resultadoVocU");
var btnValNumVoc = document.querySelector("#btnValNumVoc");


function numeroVocales(texto) {

    respuestaNumVoc.innerHTML = "Respuesta: ";

    // OPERACIÓN
    if (texto == null || texto.length == 0 || texto == "") {
        contRptRtdNumVoc.classList.toggle("mostrarContRptRtd");
        resultadoNumVoc.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";

    } else if (!isNaN(texto)) {
        contRptRtdNumVoc.classList.toggle("mostrarContRptRtd");
        resultadoNumVoc.innerHTML = "ERROR: El campo está vacío, debe ingresar una palabra o frase.";

    } else {

        var a = 0;
        var e = 0;
        var i = 0;
        var o = 0;
        var u = 0;

        for (let j = 0; j <= texto.length; j++) {

            switch (texto[j]) {
                case "a":
                case "á":
                case "A":
                case "Á":
                    a++;
                    break;
                case "e":
                case "é":
                case "E":
                case "É":
                    e++;
                    break;
                case "i":
                case "í":
                case "I":
                case "Í":
                    i++;
                    break;
                case "o":
                case "ó":
                case "O":
                case "Ó":
                    o++;
                    break;
                case "u":
                case "ú":
                case "U":
                case "Ú":
                    u++;
                    break;
            }
        }

        contRptRtdNumVoc.classList.toggle("contVocales");
        
        resultadoVocA.innerHTML = " -Vocal a : " + a;
        resultadoVocE.innerHTML = " -Vocal e : " + e;
        resultadoVocI.innerHTML = " -Vocal i : " + i;
        resultadoVocO.innerHTML = " -Vocal o : " + o;
        resultadoVocU.innerHTML = " -Vocal u : " + u;
    }

    // CAMBIAR EL NOMBRE DEL BOTON VALIDAR Y BORRAR
    if (contRptRtdNumVoc.className !== ("contRptRtd" || "contVocales")) {
        btnValNumVoc.value = "Borrar";


    } else if (contRptRtdNumVoc.className == ("contRptRtd" || "contVocales")) {
        btnValNumVoc.value = "Validar";
        secNumVoc.value = "";
        resultadoVocA.innerHTML = " ";
        resultadoVocE.innerHTML = " ";
        resultadoVocI.innerHTML = " ";
        resultadoVocO.innerHTML = " ";
        resultadoVocU.innerHTML = " ";
    }
}

btnValNumVoc.addEventListener('click', function () {
    numeroVocales(secNumVoc.value);
});
