const titulo = document.getElementById("titulo");
const titulo1 = "presionar boton";
const titulo2 = "boton presionado";
const botonPresionado = localStorage.getItem("botonPresionado") || false;

if(botonPresionado == "true") {
    titulo.innerHTML = titulo2;
    setTimeout (() => {
        titulo.innerHTML = titulo1;
        localStorage.setItem ("botonPresionado", false);
    }, 600000);
} else {
    titulo.innerHTML = titulo1
}

function presionaBoton () {
    titulo.innerHTML = titulo2;
    localStorage.setItem ("botonPresionado", true);
    setTimeout (() => {
        titulo.innerHTML = titulo1;
        localStorage.setItem ("botonPresionado", false);
    }, 600000);
}