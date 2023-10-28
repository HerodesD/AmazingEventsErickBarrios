const urlParametros = new URLSearchParams(window.location.search);
let id = urlParametros.get("_id")
console.log(id);
const ContenedorDetails = document.getElementById("ContenedorCardsDetails")
const eventos = data.events
let eventosEncontrados = eventos.find(evento => evento._id == id)
console.log(eventosEncontrados);



let carta = elementos => {
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



}

carta(eventosEncontrados)

