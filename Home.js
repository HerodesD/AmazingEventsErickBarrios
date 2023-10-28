const eventos = data.events
const fechaBase = data.currentDate
const contenedorHome = document.getElementById("ContenedorCardsHome");
const ContenedorHomeDos = document.getElementById("ContenedorCheckHome");
const BarraDeBusqueda = document.getElementById("barraDeBusqueda");
let categoriasDuplicadas = eventos.map(events => events.category.replace(" ", "-"));
const categoriasLimpias = Array.from(new Set(categoriasDuplicadas));


// Función Para Generar las Cartas

let CrearCarta = arrayEventos => {
    if (arrayEventos.length == 0) {
        contenedorHome.innerHTML = `     <div class="d-flex justify-content-center align-content-center flex-column">
        <img src="./Recursos_Amazing_Events_Task_1/BusquedaNoEncontrada.jpeg" class="img-fluid w-100" style="height: 500px;
        width: 400px;" alt="">
        <h1 class="d-flex justify-content-center align-content-center">Your search has no match, try searching by event names.</h1>
    </div>`
    } else {
        contenedorHome.innerHTML = ""
        arrayEventos.forEach(elementos => {
            //console.table(elementos)
            const carta = document.createElement("div")
            carta.classList.add("card")
            carta.classList.add("m-2")
            carta.innerHTML = `
        <img class="card-img-top h-50" src="${elementos.image}"...">
<div class="card-body text-center text-bg-dark " id="${elementos._id}"
    <h5 class="card-title">${elementos.name}</h5>
    <h6>${elementos.date}</h6>
    <p class="card-text">We invite you to the concert of the century. you can t lose this. buy
        your ticket</p>
        <ul class="list-group list-group-item-secondary py-2">
        <li class="list-group-item"><strong>Place:</strong> ${elementos.place}</li>
        <li class="list-group-item"> <strong>Category:</strong> ${elementos.category}</li>
    </ul>
    <a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">${elementos.price} USD</a>
    <a href="./Details.html?_id=${elementos._id}" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
</div>`

            contenedorHome.appendChild(carta);

        })
    }
}
CrearCarta(eventos)


// Función para Generar CheckBox (Falta aplicar check a otras paginas )

let Categorias = Categorias => {
    for (let category of Categorias) {

        const Check = document.createElement("div");
        Check.classList.add("form-check", "form-check-inline");
        Check.innerHTML =
            `
    <input class=" form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category.replace(" ", "-")}</label> 
`
        ContenedorHomeDos.appendChild(Check)

    }

}
Categorias(categoriasLimpias)

//Función Para Filtrar las CheckBox

let filtrarChecks = events => {
    let chequeados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    let eventosFiltrados = []

    events.forEach(evento => {
        chequeados.forEach(category => {
            if (category == evento.category.replace(" ", "-")) {
                eventosFiltrados.push(evento)
            }


        })
    })
    if (eventosFiltrados.length == 0) {
        eventosFiltrados = events
    }
    console.log(events);
    console.log(eventosFiltrados);
    return eventosFiltrados

}

let filtrarPorTexto = events => {
    return events.filter(evento => evento.name.toLowerCase().includes(BarraDeBusqueda.value.toLowerCase()))

}

let megaFiltro = events => {
    let CheckFiltrados = filtrarChecks(events)
    let filtroPorTexto = filtrarPorTexto(CheckFiltrados)
    CrearCarta(filtroPorTexto)

}

// Escuchador de Eventos 
ContenedorHomeDos.addEventListener('change', (events) => {

    megaFiltro(eventos)

})
BarraDeBusqueda.addEventListener('keyup', (events) => {

    megaFiltro(eventos)

})


