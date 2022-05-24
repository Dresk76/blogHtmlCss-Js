// AJAX

var bandera = document.querySelector("#bandera");
var contRptRtdAjax = document.querySelector("#contRptRtdAjax");
var btnMostrar = document.querySelector("#btnMostrar");
var btnBorrar = document.querySelector("#btnBorrar");
var contbtnBorrar = document.querySelector("#contbtnBorrar");
var parrafoAjax = document.querySelector("#parrafoAjax");
var spanPeticion = document.querySelector("#spanPeticion");
var lista = document.querySelector(".lista");
var secAjax = document.querySelector("#secAjax");



function codigoAjax(urlHttp) {


    if (secAjax.value == null || secAjax.value.length == 0 || secAjax.value == "") {

        spanPeticion.innerHTML = "Comprobando...";
        setTimeout(function () {
            console.log("Error");
            spanPeticion.innerHTML = "Error";
            contRptRtdAjax.classList.add('mostrarAjax');
            parrafoAjax.innerHTML = "Error: Debe ingresar una URL http://...";
            btnMostrar.style.display = "none";
            contbtnBorrar.style.display = "block";
        }, 500);


    } else if (bandera.innerHTML == "") {

        (() => {
            const xhr = new XMLHttpRequest(),
                $xhr = document.getElementById("xhr"),
                $fragment = document.createDocumentFragment();

            console.log(xhr);


            xhr.addEventListener("readystatechange", (e) => {

                spanPeticion.innerHTML = "Comprobando...";

                if (xhr.readyState == 1) {
                    setTimeout(function () {

                        console.log("Cargando...");
                        return spanPeticion.innerHTML = "Cargando...";
                    }, 250);
                }


                if (xhr.readyState !== 4) {
                    setTimeout(function () {
                        console.log("Completado...");
                        spanPeticion.innerHTML = "Completado...";
                    }, 500);
                    return;
                }

                setTimeout(function () {

                    if (xhr.status >= 200 && xhr.status < 300) {

                        console.log("Exitoso");
                        spanPeticion.innerHTML = "Exitoso";
                        console.log(xhr.responseText);

                        let json = JSON.parse(xhr.responseText);
                        console.log(json);

                        json.forEach((el) => {

                            const $li = document.createElement("li");
                            $li.className = "liLista";
                            $li.innerHTML = `
                            Nombre: ${el.name} <br>
                            Email: ${el.email} <br>
                            Télefono: ${el.phone} <br>
                            `;
                            $fragment.appendChild($li);
                            bandera.innerHTML = "True";
                        });

                        $xhr.appendChild($fragment);
                        contLista.classList.add('mostrarAjax');

                    } else {
                        console.log("Error");
                        spanPeticion.innerHTML = "Error";
                        let message = xhr.statusText || "URL no detectada, intentelo nuevamente.";
                        contRptRtdAjax.classList.add('mostrarAjax');
                        parrafoAjax.innerHTML = `Error ${xhr.status} : ${message}`;
                    }

                    secAjax.value = "";
                    btnMostrar.style.display = "none";
                    contbtnBorrar.style.display = "block";
                }, 750);
            });

            xhr.open("GET", urlHttp);

            xhr.send();

            //https://jsonplaceholder.typicode.com/users
        })();
    }
};

btnMostrar.addEventListener('click', function () {
    codigoAjax(secAjax.value);
});


btnBorrar.addEventListener('click', function () {

    spanPeticion.innerHTML = "Cargando...";
    setTimeout(function () {

        contRptRtdAjax.classList.remove('mostrarAjax');
        contLista.classList.remove('mostrarAjax');

        if (!secAjax.value == null || !secAjax.value.length == 0 || !secAjax.value == "") {

            parrafoAjax.innerHTML = "";
            bandera.innerHTML = "";
            lista.innerHTML = "";
            spanPeticion.innerHTML = "No iniciada";
            contbtnBorrar.style.display = "none";
            btnMostrar.style.display = "block";
            secAjax.value = "";

        } else {

            parrafoAjax.innerHTML = "";
            bandera.innerHTML = "";
            lista.innerHTML = "";
            spanPeticion.innerHTML = "No iniciada";
            contbtnBorrar.style.display = "none";
            btnMostrar.style.display = "block";
        }

    }, 400);

});








// btnMostrar.addEventListener('click', function () {

//     if (parrafoAjax.innerHTML == "") {

//         (() => {
//             const $fetchAsync = document.getElementById("fetch-async"),
//                 $fragment = document.createDocumentFragment();



//             async function getData() {
//                 try {
//                     let res = await fetch("https://jsonplaceholder.typicode.com/user"),
//                         json = await res.json();

//                     console.log(res, json);

//                     setTimeout(function () {
//                         console.log("Cargando...");
//                         spanPeticion.innerHTML = "Cargando...";
//                     }, 250);

//                     if (res.readyState !== 4) {
//                         setTimeout(function () {
//                             console.log("Completado...");
//                             spanPeticion.innerHTML = "Completado...";
//                         }, 1000);
//                     }

//                     if (res.ok) {
//                         setTimeout(function () {
//                             console.log("Exitoso");
//                             spanPeticion.innerHTML = "Exitoso";
//                         }, 1500);

//                     } else if (!res.ok) throw {
//                         status: res.status,
//                         statusText: res.statusText
//                     }

//                     setTimeout(function () {
//                         json.forEach((el) => {
//                             contLista.style.display = "block";
//                             const $li = document.createElement("li");
//                             $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//                             $fragment.appendChild($li);
//                             parrafoAjax.innerHTML = "True";
//                         });
//                         $fetchAsync.appendChild($fragment);
//                     }, 1500);


//                 } catch (err) {
//                     setTimeout(function () {
//                         console.log("Error");
//                         spanPeticion.innerHTML = "Error";
//                         let message = err.statusText || "Ocurrió un error";
//                         contLista.style.display = "block";
//                         parrafoAjax.style.display = "block";
//                         parrafoAjax.innerHTML = `Error ${err.status} : ${message}`;
//                     }, 1500);

//                 } finally {
//                     console.log("Se ejecutará independientemente de la promesa try..catch");
//                 }
//             }
//             getData();
//         })();
//     }
//     contbtnBorrar.style.display = "block";
// });