export const ApiUrl = "https://mindhub-xj03.onrender.com/api/amazing";

export const contenedorHome = document.getElementById("ContenedorCardsHome");
export const ContenedorHomeDos = document.getElementById("ContenedorCheckHome");
export const contenedorUpcomingEvents = document.getElementById("ContenedorCardsUpcomingEvents");
export const contenedorUpcomingEventsDos = document.getElementById("ContenedorCheckUpcomingEvents");
export const contenedorPastEvents = document.getElementById("ContenedorCardsPastEvents");
export const contenedorPastEventsDos = document.getElementById("ContenedorCheckPastEvents");
export const ContenedorDetails = document.getElementById("ContenedorCardsDetails");
export const BarraDeBusqueda = document.getElementById("barraDeBusqueda");
export const Tabla = document.getElementById("TablaStats");
export let CrearCarta = arrayEventos => {
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
} //función para Crear Cartas home.
export let CrearCartaDos = arrayEventos => {



    if (arrayEventos.length == 0) {
        contenedorUpcomingEvents.innerHTML = `     <div class="d-flex justify-content-center align-content-center flex-column">
        <img src="./Recursos_Amazing_Events_Task_1/BusquedaNoEncontrada.jpeg" class="img-fluid w-100" style="height: 500px;
        width: 400px;" alt="">
        <h1 class="d-flex justify-content-center align-content-center">Your search has no match, try searching by event names.</h1>
    </div>`
    } else {
        contenedorUpcomingEvents.innerHTML = ""
        arrayEventos.forEach(elementos => {
            console.log(elementos);
            if (elementos.events !== elementos.estimate) {


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
<li class="list-group-item"><strong>Estimate: </strong>${elementos.estimate}</li>
</ul>
<a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">${elementos.price} USD</a>
<a href="./Details.html?_id=${elementos._id}" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
</div>`

                contenedorUpcomingEvents.appendChild(carta);

            }

        })
    }

} //función para Crear Cartas Upcoming Events.
export let CrearCartaTres = arrayEventos => {
    if (arrayEventos.length == 0) {
        contenedorPastEvents.innerHTML = `     <div class="d-flex justify-content-center align-content-center flex-column">
        <img src="./Recursos_Amazing_Events_Task_1/BusquedaNoEncontrada.jpeg" class="img-fluid w-100" style="height: 500px;
        width: 400px;" alt="">
        <h1 class="d-flex justify-content-center align-content-center">Your search has no match, try searching by event names.</h1>
    </div>`
    } else {
        contenedorPastEvents.innerHTML = ""
        arrayEventos.forEach(elementos => {
            if (elementos.events !== elementos.assistance) {
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
<li class="list-group-item"><strong>Assistance: </strong>${elementos.assistance}</li>
</ul>
<a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">${elementos.price} USD</a>
<a href="./Details.html?_id=${elementos._id}" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
</div>`

                contenedorPastEvents.appendChild(carta);

            }

        })
    }
}//función para Crear Cartas past Events.
export let Categorias = Categorias => {
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

} //función para crear checkbox home.
export let CategoriasDos = Categorias => {
    for (let category of Categorias) {

        const Check = document.createElement("div");
        Check.classList.add("form-check", "form-check-inline");
        Check.innerHTML =
            `
    <input class=" form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category.replace(" ", "-")}</label> 
`
        contenedorUpcomingEventsDos.appendChild(Check)

    }

}//función para crear checkbox Upcoming Events.
export let CategoriasTres = Categorias => {
    for (let category of Categorias) {

        const Check = document.createElement("div");
        Check.classList.add("form-check", "form-check-inline");
        Check.innerHTML =
            `
    <input class=" form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category.replace(" ", "-")}</label> 
`
        contenedorPastEventsDos.appendChild(Check)

    }

}// Función para crear checkbox Past Events.
export let filtrarChecks = events => {
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

} //función para filtrar por categorias.
export let filtrarPorTexto = events => {
    return events.filter(evento => evento.name.toLowerCase().includes(BarraDeBusqueda.value.toLowerCase()))

}//función para filtrar por texto.
export let megaFiltro = events => {
    let CheckFiltrados = filtrarChecks(events)
    let filtroPorTexto = filtrarPorTexto(CheckFiltrados)
    CrearCarta(filtroPorTexto)

}//función (mega filtro) para combinar filtro por categorias y por textos.
export let megaFiltroDos = events => {
    let CheckFiltrados = filtrarChecks(events)
    let filtroPorTexto = filtrarPorTexto(CheckFiltrados)
    CrearCartaDos(filtroPorTexto)

}//función (mega filtro) para combinar en UpcomingEvents filtro por categorias y por textos.
export let megaFiltroTres = events => {
    let CheckFiltrados = filtrarChecks(events)
    let filtroPorTexto = filtrarPorTexto(CheckFiltrados)
    CrearCartaTres(filtroPorTexto)

}//función (mega filtro) para combinar en Past Events filtro por categorias y por textos.
export let CrearCartaDetalles = elementos => {
    if (elementos.data = elementos.assistance) {
        const carta = document.createElement("div")
        carta.classList.add("card")
        carta.style.width = "60%";
        carta.style.height = "50%";
        carta.innerHTML = `<img class="card-img-top h-100 " src="${elementos.image}"...">
<div class="card-body text-center text-bg-dark  " id="${elementos._id}"
    <h1 class="card-title">${elementos.name}</h1>
    <h4>${elementos.date}</h4>
    <p class="card-text">We invite you to the concert of the century. you can not lose this. buy
        your ticket</p>
        
        <ul class="list-group list-group-item-secondary">
            <li class="list-group-item"> <strong>Category:</strong> ${elementos.category}</li>
            <li class="list-group-item"><strong>Place:</strong> ${elementos.place}</li>
            <li class="list-group-item"><strong>Capacity:</strong>${elementos.capacity}</li>
            <li class="list-group-item"><strong>Assistance: </strong>${elementos.assistance}</li>
        </ul>
    <a href="#" class="btn btn-outline-primary disabled my-2" style="width: 100%;">${elementos.price} USD</a>

</div>`
        ContenedorDetails.appendChild(carta)



    } else {
        const carta = document.createElement("div")
        carta.classList.add("card")
        carta.style.width = "60%";
        carta.style.height = "50%";
        carta.innerHTML = `<img class="card-img-top h-100 " src="${elementos.image}"...">
<div class="card-body text-center text-bg-dark  " id="${elementos._id}"
<h1 class="card-title">${elementos.name}</h1>
<h4>${elementos.date}</h4>
<p class="card-text">We invite you to the concert of the century. you can not lose this. buy
    your ticket</p>
    
    <ul class="list-group list-group-item-secondary">
        <li class="list-group-item"> <strong>Category:</strong> ${elementos.category}</li>
        <li class="list-group-item"><strong>Place:</strong> ${elementos.place}</li>
        <li class="list-group-item"><strong>Capacity:</strong>${elementos.capacity}</li>
        <li class="list-group-item"><strong>Estimate: </strong>${elementos.estimate}</li>
    </ul>
<a href="#" class="btn btn-outline-primary disabled my-2" style="width: 100%;">${elementos.price} USD</a>

</div>`
        ContenedorDetails.appendChild(carta)
    }



}//función para Crear en detalles