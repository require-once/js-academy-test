"use strict";

/*
var calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
	var distanceOfFirstCyclist = speedOfFirstCyclist * time;
	var distanceOfSecondCyclist = speedOfSecondCyclist * time;
	var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
	
	return totalDistance;
};

console.log(calculateDistance(3, 12, 14));
*/


// Цикл, реализованный с помощью рекурсии
/*
var washNextItem = function(itemsLeft) {
	itemsLeft--;
	console.warn('В раковине осталось ' + itemsLeft + ' предметов.');
	
	if (itemsLeft > 0) {
		washNextItem(itemsLeft);
	}
}

washNextItem(10);
*/


/*
var washItems = function(itemsLeft) {
	//debugger;
	while(itemsLeft-- > 0) {
		console.warn('В раковине осталось ' + itemsLeft + ' предметов.');
	}
}

washItems(10);
*/


/*
var numbers = [1, 2, 3];
console.log(Math.floor(Math.random() * numbers.length));

var obj = {
	name: 'dimas',
	age: 33
};
console.log(obj['n' + 'ame']);
*/


// Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

/*
var gradient = ctx.createLinearGradient(0, 0, 300, 150);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);

ctx.strokeStyle = 'blue';
ctx.strokeRect(75, 0, 150, 150);

ctx.clearRect(25, 25, 20, 20);
*/

ctx.beginPath();

/*
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);
ctx.lineTo(170, 60);
ctx.lineTo(150, 100);
ctx.bezierCurveTo(140, 90, 110, 90, 100, 100);
*/

ctx.moveTo(150, 0);
ctx.lineTo(195, 130);
ctx.lineTo(80, 50);
ctx.lineTo(220, 50);
ctx.lineTo(105, 130);
ctx.lineTo(150, 0);

ctx.closePath();
ctx.stroke();
ctx.fill('evenodd');


ctx.font = '30px Tahoma';
ctx.textBaseline = 'hanging';
ctx.fillText('Привет', 0, 10);
