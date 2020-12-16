
window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
var getNewYorkTime = function() {
	document.getElementById("nytime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/New_york',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getNewYorkTime();
setInterval(getNewYorkTime, 1000);
var getNewYorkTime = function() {
	document.getElementById("nytime2").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/New_york',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getNewYorkTime();
setInterval(getNewYorkTime, 1000);
var getChicagoTime = function() {
	document.getElementById("chicagotime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Chicago',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getChicagoTime();
setInterval(getChicagoTime, 1000);
var getAnaheimTime = function() {
	document.getElementById("disneytime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Los_angeles',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getAnaheimTime();
setInterval(getAnaheimTime, 1000);
var getAlbertaTime = function() {
	document.getElementById("altime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Denver',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getAlbertaTime();
setInterval(getAlbertaTime, 1000);
var getTorontoTime = function() {
	document.getElementById("nytime3").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/New_york',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getTorontoTime();
setInterval(getTorontoTime, 1000);
var getVancouverTime = function() {
	document.getElementById("disneytime2").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Los_angeles',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getVancouverTime();
setInterval(getVancouverTime, 1000);
var getBrentwoodTime = function() {
	document.getElementById("brenttime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Los_angeles',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getBrentwoodTime();
setInterval(getBrentwoodTime, 1000);
var getZocaloTime = function() {
	document.getElementById("mc1time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Chicago',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getZocaloTime();
setInterval(getZocaloTime, 1000);
var getCancunTime = function() {
	document.getElementById("cancuntime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Chicago',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getCancunTime();
setInterval(getCancunTime, 1000);
var getBellasTime = function() {
	document.getElementById("mc2time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Chicago',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getBellasTime();
setInterval(getBellasTime, 1000);
var getCastleTime = function() {
	document.getElementById("mc3time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/Chicago',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getCastleTime();
setInterval(getCastleTime, 1000);
