"use strict";

/*
var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

var fileChooser = document.querySelector('input[type=file]');
var preview = document.querySelector('#preview');
var img = preview.querySelector('img');

fileChooser.addEventListener('change', function() {
	var file = fileChooser.files[0];
	var fileName = file.name.toLowerCase();
	
	var matches = FILE_TYPES.some(function(item) {
		return fileName.endsWith(item);
	});
	
	if (matches) {
		var reader = new FileReader();
		
		reader.addEventListener('load', function() {
			img.src = reader.result;
			//console.log(reader.result);
		});
		
		reader.readAsDataURL(file);
	}
});
*/


/*
var Coordinate = function(x, y, maxX) {
	this.x = x;
	this.y = y;
	this.maxX = maxX;
};

Coordinate.prototype.getX = function() {
	return this.x;
}
Coordinate.prototype.setX = function(x) {
	this.x = Math.min(x, this.maxX);
}

//console.log(Coordinate.prototype);

var coord = new Coordinate(100, 200, 1000);
coord.setX(1700);
console.log(coord.getX());
*/


/*
var greet = function(playerName) {
	console.log('Привет, ' + playerName + '! Меня зовут: ' + this.name);
};

var wizard = {
	name: 'Пендальф',
	greet: greet
};

var badWizard = {
	name: 'Фродо',
	greet: greet
};

//greet = greet.bind(badWizard);
greet.call(wizard, 'Евгений');
greet.apply(badWizard, ['Николай']);


var sum = function(a, b) {
	return a + b;
}

console.log( sum.call({}, 1, 2) );
console.log( sum.apply({}, [1, 2]) );
*/


/*
document.addEventListener('click', function(evt) {
	console.log(this === document.body);
	console.log(this === evt.target);
	console.log(this === evt.currentTarget);
});
*/


var createWizard = function(name) {
	return {
		name: name,
		selectHandler: function(evt) {
			evt.target.textContent += ': ' + this.name;
		}
	};
};

var wizards = [
	createWizard('Саурон'),
	createWizard('Радагаст'),
	createWizard('Пендальф')
];

var headers = document.querySelectorAll('h2');

for (var i = headers.length; i--;) {
	var wizard = wizards[i];
	headers[i].addEventListener('click', wizard.selectHandler.bind(wizard));
}
