console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Successfully Submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



const images = document.querySelector('#images1');

function compliment () {
	alert("You are beautiful!")
}

images.addEventListener('mouseover',compliment)

	


