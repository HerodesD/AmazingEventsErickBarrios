import { ApiUrl, CrearCartaDetalles } from "./Modules/funciones.js";

fetch(ApiUrl)
    .then(response => response.json()).then(data => {
        const eventos = data.events;
        const urlParametros = new URLSearchParams(window.location.search);
        let id = urlParametros.get("_id");
        console.log(id);
        let eventosEncontrados = eventos.find(evento => evento._id == id);
        CrearCartaDetalles(eventosEncontrados)







    }).catch(error => {
        console.log("error", error);
    })








