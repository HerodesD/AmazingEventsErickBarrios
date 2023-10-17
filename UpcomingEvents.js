const eventos = data.events
const contenedorHome = document.getElementById("ContenedorCardsHome")
const fecha = data.currentDate



for (let elementos of eventos) {
    console.table(elementos)
    if (fecha < elementos.date) {
        const carta = document.createElement("div")
        carta.classList.add("card")
        carta.classList.add("m-2")
        carta.innerHTML = `<img class="card-img-top h-50" src="${elementos.image}"...">
<div class="card-body text-center text-bg-dark " id="${elementos._id}"
<h5 class="card-title">${elementos.name}</h5>
<h6>${elementos.date}</h6>
<p class="card-text">We invite you to the concert of the century. you can not lose this. buy
    your ticket</p>
    
    <ul class="list-group list-group-item-secondary p-2 ">
        <li class="list-group-item"> <strong>Category:</strong> ${elementos.category}</li>
        <li class="list-group-item"><strong>Place:</strong> ${elementos.place}</li>
        <li class="list-group-item"><strong>Capacity:</strong>${elementos.capacity}</li>
        <li class="list-group-item"><strong>Estimate: </strong>${elementos.estimate}</li>
    </ul>
<a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">${elementos.price} USD</a>
<a href="#" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
</div>`
        contenedorHome.appendChild(carta)
    }





}

