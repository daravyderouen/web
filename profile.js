function informColor (){
    alert('My favorite color is blue!');
}

let colorButton = document.querySelector("button#color")
//check if that works
colorButton.addEventListener("click",informColor)


function favoritePlace (){
    alert('My favorite place is watching the sunset either at a beach or in the mountains when it\'s snowing.');
}

let placeButton = document.querySelector("button#place")
//check if that works
placeButton.addEventListener("click",favoritePlace)


function ritualHabits (){
    alert('My daily ritual is praying every day for what I am thankful for, everything!');
}

let ritualButton = document.querySelector("button#ritual")
//check if that works
ritualButton.addEventListener("click",ritualHabits)