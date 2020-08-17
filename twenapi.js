const req = require("request");
const rp = require("request-promise");
const fs = require("fs");

const generate = function generate (i = 10){
	var num = i + 1;
	var pts = Math.floor(Math.random() * num);
	return pts;
	}
	
const points = async function points (id, key, pts="", lvl=""){
	let data = await rp({
		method: "POST",
		uri: "http://www.twen.ml/api/points.php",
		form: {
			ID: id,
			secret: key,
			points: pts,
			levels: lvl
			},
		json: true
		});
	return data;
	}

const prefixes = async function prefixes (id, def, key, pre=""){
	let data = await rp({
		method: "POST",
		uri: "http://www.twen.ml/api/prefixes.php",
		form: {
			ID: id,
			secret: key,
			prefix: pre,
			defpre: def
			},
		json: true
		});
	return data;
	}

const test = function test (){
	return "this library is work";
	}

module.exports = {
	test,
	points,
	prefixes,
	generate
	}
