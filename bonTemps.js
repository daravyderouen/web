let generateRestaurant = document.querySelector("#btn");

function clicked (){
    let restaurants = ["Saketini", "LT's Seafood", "Feezos Steakhouse", "Morvants", "JJ's Pizza", "Duffy's Diner", "La Hacienda", "Blu Basil", "Texas de Brazil", "Saigon Noodles"];
    let restaurants_random = restaurants[Math.floor(Math.random()* restaurants.length)];
    document.getElementById("output").innerHTML = restaurants_random;
    console.log(restaurants_random)
}

generateRestaurant.addEventListener("click", clicked)