"use strict";

/*
var secondPool = document.querySelector('.pool-2');
var fragment = document.createDocumentFragment();

for (var i = 0; i < 6; i++) {
	var newEl = document.createElement('div');
	newEl.className = 'el';
	newEl.innerHTML = '<span>' + i + '</span>';
	
	fragment.appendChild(newEl);
}

secondPool.appendChild(fragment);
*/

var secondPool = document.querySelector('.pool-2');
var template = document.querySelector('#element-template');
var content = template.content;
var template_div = content.querySelector('div');

for (var i = 0; i < 6; i++) {
	var el = template_div.cloneNode(true);
	el.children[0].textContent = i;
	secondPool.appendChild(el);
}
