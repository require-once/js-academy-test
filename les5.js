"use strict";

var outer = document.getElementById('outer');
var div = document.getElementById('my-div');

div.addEventListener('mousedown', function(evt) {
	evt.preventDefault();
	
	var startCoords = {
		x: evt.clientX,
		y: evt.clientY,
	};
	
	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();
		
		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY,
		};
		
		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY,
		};
		
		outer.style.top = (outer.offsetTop - shift.y) + 'px';
		outer.style.left = (outer.offsetLeft - shift.x) + 'px';
	};
	
	var onMouseUp = function(upEvt) {
		upEvt.preventDefault();
		
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	};
	
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});


var myshka = '\uD83D\uDC2D';
var lyagushka = '\uD83D\uDC38';


(function() {
	//console.log('qwe');
})();


var buttons = document.querySelectorAll('button');

/*
for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	//console.log(button);
	
	button.addEventListener('click', function(evt) {
		console.log(button.value);
	});
}
*/

/*
var addClickListener = function(button) {
	button.addEventListener('click', function(evt) {
		console.log(button.value);
	});
};

for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	addClickListener(button);
}
*/

for (var i = 0; i < buttons.length; i++) {
	(function(button) {
		button.addEventListener('click', function(evt) {
			console.log(button.value);
		});
	})(buttons[i]);
}
