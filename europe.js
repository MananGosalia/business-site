
window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
var getParisTime = function() {
	document.getElementById("paristime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Paris',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getParisTime();
setInterval(getParisTime, 1000);
var getParisTime = function() {
	document.getElementById("ruetime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Paris',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getParisTime();
setInterval(getParisTime, 1000);
var getParisTime = function() {
	document.getElementById("paris3").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Paris',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getParisTime();
setInterval(getParisTime, 1000);
var getParisTime = function() {
	document.getElementById("paris4").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Paris',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getParisTime();
setInterval(getParisTime, 1000);
var getLondonTime = function() {
	document.getElementById("londontime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/London',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getLondonTime();
setInterval(getLondonTime, 1000);
var getLondonTime = function() {
	document.getElementById("londontime2").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/London',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getLondonTime();
setInterval(getLondonTime, 1000);
var getLondonTime = function() {
	document.getElementById("londontime3").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/London',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getLondonTime();
setInterval(getLondonTime, 1000);
var getLondonTime = function() {
	document.getElementById("londontime4").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/London',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getLondonTime();
setInterval(getLondonTime, 1000);
var getRomeTime = function() {
	document.getElementById("italytime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Rome',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getRomeTime();
setInterval(getRomeTime, 1000);
var getRomeTime = function() {
	document.getElementById("italy2time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Rome',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getRomeTime();
setInterval(getRomeTime, 1000);
var getRomeTime = function() {
	document.getElementById("italy3time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Rome',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getRomeTime();
setInterval(getRomeTime, 1000);
var getRomeTime = function() {
	document.getElementById("italy4time").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Rome',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getRomeTime();
setInterval(getRomeTime, 1000);
