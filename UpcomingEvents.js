import { ApiUrl, CrearCartaDos, contenedorUpcomingEventsDos, CategoriasDos, BarraDeBusqueda, megaFiltroDos } from "./Modules/funciones.js";


fetch(ApiUrl)
    .then(response => response.json()).then(data => {
        const eventos = data.events;


        const CategoriaDuplicada = eventos.map(events => events.category.replace(" ", "-"));
        const CategoriaLimpia = Array.from(new Set(CategoriaDuplicada));


        CrearCartaDos(eventos)
        CategoriasDos(CategoriaLimpia)
        contenedorUpcomingEventsDos.addEventListener('change', (events) => {

            megaFiltroDos(eventos)

        })
        BarraDeBusqueda.addEventListener('keyup', (events) => {

            megaFiltroDos(eventos)

        })




    }).catch(error => {
        console.log("error", error);
    })

