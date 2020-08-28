"use strict";

/*
var arr = [30, 1, 2, 3, 6, 301, 600];
var origin = arr.slice();
var sorted = arr.sort();

var sorted2 = Array.from(arr).sort(function(a, b) {
	return a - b;
});


console.log(sorted);
console.log(sorted2);
console.log(origin);
*/


var wizards = [
	{
		name: 'Пендальф',
		eyesColor: 'blue',
		coatColor: 'green',
	},
	{
		name: 'Баба Яга',
		eyesColor: 'black',
		coatColor: 'gray',
	},
	{
		name: 'Сарумян',
		eyesColor: 'white',
		coatColor: 'yellow',
	},
	{
		name: 'Радагаст',
		eyesColor: 'red',
		coatColor: 'blue',
	},
];


var party = 'Саурон пригласил на вечеринку: ';

/*
var result = wizards.reduce(function(acc, el, ix, arr) {
	var message = acc + el.name;
	
	if (ix !== (arr.length - 1)) {
		message += ', ';
	}
	
	return message;
}, party);

console.log(result);
*/


var result = wizards.map(function(el) {
	return el.name;
}).join(', ');

console.log(party + result);


wizards.forEach(function(wizard) {
	var button = document.createElement('button');
	button.textContent = wizard.name;
	button.addEventListener('click', function(evt) {
		button.style.backgroundColor = wizard.coatColor;
	});
	document.body.appendChild(button);
});
