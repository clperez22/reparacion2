//datos
import { data } from "./data.js";
import { caja_descrpcion } from "./descripcion_producto.js";


let main_DOM = document.querySelector(".main");

data.forEach((cada_item)=>{ 
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `


    <div class = "caja_img">
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

function mostrarPasos(titulo, imagen, descripcion, herramientas, pasos) {
    let cajaItemDOM = document.querySelector(".item");
    let cajaDescripcionDOM = document.querySelector(".descripcion_del_producto");
    let imagenProductoDOM = document.querySelector(".imagen_del_producto");
    let nombreProductoDOM = document.querySelector(".nombre_del_producto");
    
    let herramientasProductoDOM = document.querySelector(".herramientas_del_producto");
    let pasosProductoDOM = document.querySelector(".pasos_del_producto");

    nombreProductoDOM.textContent = titulo;
    imagenProductoDOM.src = imagen;
    cajaDescripcionDOM.textContent = descripcion;

    herramientasProductoDOM.innerHTML = herramientas.map(herramienta =>  `<p>${herramienta}</p>`).join("");
   
    pasosProductoDOM.innerHTML = pasos.map(paso => `<p>${paso}</p>`).join("");

    cajaItemDOM.classList.add("mostrar"); // Mostrar la caja "item" al hacer clic
   
}

productos.forEach((cadaElemento, index) => {
    cadaElemento.addEventListener("click", () => {
        let titulo = data[index].titulo;
        let imagen = data[index].img;
        let descripcion = data[index].descripcion;
        
        let herramientas = data[index].herramientas || [];
        let pasos = data[index].pasos || [];

        mostrarPasos(titulo, imagen, descripcion, herramientas, pasos);
        let main = document.querySelector(".main");

        main.classList.add("ocultar");


    });
    
});

