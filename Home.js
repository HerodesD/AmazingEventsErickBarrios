import { ApiUrl, CrearCarta, ContenedorHomeDos, Categorias, BarraDeBusqueda, megaFiltro } from "./Modules/funciones.js";



fetch(ApiUrl)
    .then(response => response.json()).then(data => {
        const eventos = data.events;
        const CategoriaDuplicada = eventos.map(events => events.category.replace(" ", "-"));
        const CategoriaLimpia = Array.from(new Set(CategoriaDuplicada));


        CrearCarta(eventos)
        Categorias(CategoriaLimpia)
        ContenedorHomeDos.addEventListener('change', (events) => {

            megaFiltro(eventos)

        })
        BarraDeBusqueda.addEventListener('keyup', (events) => {

            megaFiltro(eventos)

        })




    }).catch(error => {
        console.log("error", error);
    })





