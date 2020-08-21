"use strict";

var xhr = new XMLHttpRequest();
console.log(xhr.readyState);

xhr.addEventListener('load', function(evt) {
	console.log(evt.target === xhr);
	console.dir(xhr.response);
	//console.log(xhr);
});

xhr.addEventListener('error', function(evt) {
	console.log('Ошибка соединения');
});

xhr.addEventListener('timeout', function(evt) {
	console.log('Запрос не успел выполниться за ' + xhr.timeout + ' мс.');
});
xhr.timeout = 2000;


//xhr.open('GET', 'https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json');
xhr.responseType = 'json';
xhr.open('GET', 'http://js-academy.local/data.json');
//xhr.open('GET', 'http://128.0.0.1/data.json');
xhr.send();



/*
var parsed = JSON.parse('{"name": "Berlioz"}');
console.log(parsed);
var stringified = JSON.stringify(parsed);
console.log(stringified);
*/


//throw new Error('А-та-та!');

/*
try {
	console.log(JSON.parse('asd'));
} catch(err) {
	console.error(err.message);
}
*/
