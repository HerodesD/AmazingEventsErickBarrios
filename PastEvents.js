import { ApiUrl, CrearCartaTres, contenedorPastEventsDos, CategoriasTres, BarraDeBusqueda, megaFiltroTres } from "./Modules/funciones.js";


fetch(ApiUrl)
    .then(response => response.json()).then(data => {
        const eventos = data.events;
        const CategoriaDuplicada = eventos.map(events => events.category.replace(" ", "-"));
        const CategoriaLimpia = Array.from(new Set(CategoriaDuplicada));


        CrearCartaTres(eventos)
        CategoriasTres(CategoriaLimpia)
        contenedorPastEventsDos.addEventListener('change', (events) => {

            megaFiltroTres(eventos)

        })
        BarraDeBusqueda.addEventListener('keyup', (events) => {

            megaFiltroTres(eventos)

        })




    }).catch(error => {
        console.log("error", error);
    })

