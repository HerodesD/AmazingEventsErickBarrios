const eventos = data.events
const fechaBase = data.currentDate




for (let elementos of eventos) {

    console.table(elementos)
    const contenedorHome = document.getElementById("ContenedorCardsHome")
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
            <li class="list-group-item"><strong>Assistance: </strong>${elementos.assistance}</li>
            <li class="list-group-item"><strong>Estimate: </strong>${elementos.estimate}</li>
        </ul>
    <a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">${elementos.price} USD</a>
    <a href="#" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
</div>`
    contenedorHome.appendChild(carta)



}


/*


            <div class="d-flex flex-wrap gap-5 ">
                <div class=" card text-center text-bg-dark " style=" width: 18rem;">
                    <img src="./Recursos_Amazing_Events_Task_1/music_concert.jpg" class="card-img-top " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Concert</h5>
                        <p class="card-text">We invite you to the concert of the century. you can not lose this. buy
                            your ticket</p>
                        <a href="#" class="btn btn-outline-primary disabled " style="width: 7rem;">$USD 350</a>
                        <a href="#" class="btn btn-outline-light mx-2" style="width: 7rem;">Details</a>
                    </div>
                </div>
                
                
                
                */
