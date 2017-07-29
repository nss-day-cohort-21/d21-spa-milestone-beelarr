/**
 * Created by beelarr on 7/28/17.
 */



{
    var vehicles = {};
    let cars = [];


    vehicles.load_items = function () {
        var loader = new XMLHttpRequest();
        loader.addEventListener('load', function () {
            cars = JSON.parse(this.responseText);
            loader_autos(cars);

        });
        loader.open("GET", 'inventory.json');
        loader.send();


    }
}



function loader_autos(cars) {
    cars.cars.forEach((e)=>{
        document.querySelector('.row1').innerHTML +=
            `<div id ="col" class="col-xs-4">
                <h3>${e.make}</h3>
                <h4>${e.model}</h4>
                <h5>${e.year}</h5>
                <h5><strong>$ ${e.price}.00</strong></h5>
                <p id="description">${e.description}</p>
            
            </div>`
});


    cars.trucks.forEach((e)=>{

        document.querySelector('.row2').innerHTML +=
            `<div id ="col" class="col-xs-4 ">
                <h3>${e.make}</h3>
                <h4>${e.model}</h4>
                <h5>${e.year}</h5>
                <h5><strong>$ ${e.price}.00</strong></h5>
                <p id="description">${e.description}</p>
            
            </div>`
    })

}

vehicles.load_items(loader_autos);

//
let car_card = document.getElementsByClassName('col-xs-4')

let getting_cards = (e)=>{
    console.log('getting cards')
    let input = document.querySelector('input')
    input.focus()
    input.addEventListener('keyup', ()=>{
        let current_card = e.currentTarget;
        let description = current_card.querySelector('#description');
        description.innerHTML = input.value
    })

};
Array.from(car_card).forEach(function(e) {
    e.addEventListener('click', getting_cards);
});