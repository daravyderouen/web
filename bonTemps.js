let generateRestaurant = document.querySelector("#btn");

function clicked (){
    let restaurants = ["Saketini", "LT's Seafood", "Feezos Steakhouse", "Morvants", "JJ's Pizza", "Duffy's Diner", "La Hacienda", "Blu Basil", "Texas de Brazil", "Saigon Noodles", "Bon Temps", "Olde Tyme"];
    let restaurants_random = restaurants[Math.floor(Math.random()* restaurants.length)];
    document.getElementById("output").innerHTML = restaurants_random;
    console.log(restaurants_random)
}

generateRestaurant.addEventListener("click", clicked)


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}