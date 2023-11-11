import { ApiUrl, } from "./Modules/funciones.js";


fetch(ApiUrl)
    .then(response => response.json()).then(data => {
        const eventos = data.events;






    }).catch(error => {
        console.log("error", error);
    })


let CrearTabla = arrayEventos => { }
