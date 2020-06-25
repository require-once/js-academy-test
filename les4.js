"use strict";

var button = document.getElementById('clickable');
var buttonClickHandler = function() {
	alert('Hello 1');
};

button.addEventListener('click', buttonClickHandler);

button.addEventListener('click', function() {
	alert('Hello 2');
});

button.removeEventListener('click', buttonClickHandler);


// вопрос слушателя
/*
for (var i = 0; i < 5; i++) {
	setTimeout(function(){console.log(i), 0});
}
*/
