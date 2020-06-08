"use strict";

var calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
	var distanceOfFirstCyclist = speedOfFirstCyclist * time;
	var distanceOfSecondCyclist = speedOfSecondCyclist * time;
	var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
	
	return totalDistance;
};

//console.log(calculateDistance(3, 12, 14));


var buySomeBread = function(eggs) {
	return eggs ? 10 : 1;
}

console.info(buySomeBread(true));
