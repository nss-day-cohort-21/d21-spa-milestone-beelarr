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


const container = document.querySelector('.container')
const input = document.querySelector('input')

container.addEventListener('click', activate_card);
input.addEventListener('keypress', edit_card)

function edit_card() {
    let input_value = input.value
    let card = document.querySelector('.active')
    let description = card.querySelector('#description')
    description.innerHTML = input_value;

}

function activate_card(e) {
    if (e.target.parentNode.classList.contains('col-xs-4')){
        let card_array = Array.from(document.getElementsByClassName('col-xs-4'))
        console.log(card_array)
        card_array.forEach((event)=>{
            event.classList.remove('active')
        });
        console.log(e.target)
        e.target.parentNode.classList.add('active');
        input.focus();

    }

}


