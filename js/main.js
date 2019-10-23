// Vanilla

// 1. grab the element to add an action to and place it in a var

// var button = document.querySelector('.nav-button');

// 2. create a click event and inside the function we will toggle a CSS class on and off

// button.addEventListener('click', function(){
// 	document.querySelector('nav').classList.toggle('toggle-show-nav');
// });

// jQuery

$('button').on('click', function(event){
	$('nav').toggleClass('toggle-show-nav');
})
