"use strict";

var OFFICER = '\u{1F46E}';
var PISTOL = '\u{1F52B}';

var Gangster = function(nickname) {
	this.nickname = nickname;
	this.weapon = PISTOL;
	this.check = function() {
		return this.weapon;
	}
};

var isPoliceman = function(gangster) {
	return !(gangster instanceof Gangster);
};

var startFireFight = function(gang) {
	do {
		var random = Math.floor(Math.random() * gang.length);
		var gangster = gang.splice(random, 1)[0];
		
		console.log('Проверяем: "' + gangster.nickname + '": ' + gangster.check());
		
		if (isPoliceman(gangster)) {
			console.log('"' + gangster.nickname + '" оказался полицейским');
			return;
		}
	} while (gang.length > 1);
	
	console.log('Полицейский не был обнаружен, гангстеры проиграли!');
};

var mrBlonde = new Gangster('Мистер Блондин');
var mrPink = new Gangster('Мистер Розовый');
var mrOrange = new Gangster('Мистер Оранжевый');
var mrWhite = new Gangster('Мистер Белый');
var mrBlue = new Gangster('Мистер Синий');

var mrRed = {
	nickname: 'Мистер Красный',
	weapon: OFFICER,
	check: function() {
		//return PISTOL;
		return this.weapon;
	}
};

startFireFight([mrBlonde, mrPink, mrOrange, mrWhite, mrBlue, mrRed]);
