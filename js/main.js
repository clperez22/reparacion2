//datos
import { data } from "./data.js";
import { caja_descrpcion } from "./descripcion_producto.js";

let main_DOM = document.querySelector(".main");

data.forEach((cada_item) => {
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
        <div class="caja_img">
            <img src="${cada_item.img}" alt="">
        </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripcion}</p>
        <span>Q.${cada_item.precio}</span>
    `;

    main_DOM.appendChild(item);
});

//ver detalles del producto
let productos = document.querySelectorAll(".item");
let main = document.querySelector(".main");
let cajaItemDOM = document.querySelector(".itemvf");

function mostrarPasos(titulo, imagen, descripcion, herramientas, pasos) {
    let cajaDescripcionDOM = cajaItemDOM.querySelector(".descripcion_del_producto");
    let imagenProductoDOM = cajaItemDOM.querySelector(".imagen_del_producto");
    let nombreProductoDOM = cajaItemDOM.querySelector(".nombre_del_producto");
   


    nombreProductoDOM.textContent = titulo;
    imagenProductoDOM.src = imagen;
    cajaDescripcionDOM.textContent = descripcion;

   
    cajaItemDOM.classList.add("mostrar");
    main.classList.add("ocultar");
}
productos.forEach((cadaElemento, index) => {
    cadaElemento.addEventListener("click", () => {
        let titulo = data[index].titulo;
        let imagen = data[index].img;
        let descripcion = data[index].descripcion;
        let herramientas = data[index].herramientas;
        let pasos = data[index].pasos;
        let precio = data[index].precio;
        let video = data[index].video; // Obtén el enlace al video

        // Mostrar la información del producto al hacer clic
        mostrarPasos(titulo, imagen, descripcion, herramientas, pasos);

        let cajaDescripcionDOM = cajaItemDOM.querySelector(".descripcion_del_producto");
        let imagenProductoDOM = cajaItemDOM.querySelector(".imagen_del_producto");

        // Establecer la imagen y mostrarla al hacer clic
        imagenProductoDOM.src = imagen;
        imagenProductoDOM.style.display = "block"; // Mostrar la imagen

        if (data[index].Estado) {
            let botonHazlo = document.createElement("button");
            botonHazlo.textContent = "Hazlo tu mismo";
            botonHazlo.classList.add("boton-hazlo");

            // Manejar el clic en el botón "Hazlo tu mismo"
            botonHazlo.addEventListener("click", () => {
                cajaDescripcionDOM.textContent = ''; // Limpiar la descripción
                let herramientasPasosDOM = document.createElement("div");
                herramientasPasosDOM.innerHTML = `
                    <h3>Herramientas:</h3>
                    ${herramientas.map(herramienta => `<p>${herramienta}</p>`).join("")}
                    <h3>Pasos:</h3>
                    ${pasos.map(paso => `<p>${paso}</p>`).join("")}
                `;
                cajaDescripcionDOM.appendChild(herramientasPasosDOM);
                botonHazlo.style.display = "none"; // Ocultar el botón "Hazlo tu mismo"

                // Agregar botón de video
                let botonVideo = document.createElement("a");
                botonVideo.textContent = "Ver tutorial";
                botonVideo.classList.add("boton-video");
                botonVideo.href = video;
                botonVideo.target = "_blank"; // Abrir enlace en una nueva pestaña
                cajaDescripcionDOM.appendChild(botonVideo);
            });

            cajaDescripcionDOM.appendChild(botonHazlo);
        } else {
            let precioDOM = document.createElement("p");
            precioDOM.textContent = `Precio: Q.${precio}`;
            cajaDescripcionDOM.appendChild(precioDOM);
        }
    });
});