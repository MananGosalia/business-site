$(window).on('load', function() {
	$('.preload').delay(100).fadeOut(1000, function() {
	  $('body').css('overflow', 'visible');
	});
  });

window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
var carousel = $(".carousel"),
	currdeg = 0,
	current = 0;
$(".next").on("click", {
	d: "n"
}, rotate);
$(".prev").on("click", {
	d: "p"
}, rotate);

function rotate(e) {
	$(carousel.find('.active')).removeClass('active');
	if (e.data.d == "n") {
		currdeg = currdeg - 120;
		current = (current + 1) % carousel.find('.item').length;
	}
	if (e.data.d == "p") {
		currdeg = currdeg + 120;
		current = (current - 1 + carousel.find('.item').length) % carousel.find('.item').length;
	}
	$(carousel.find('.item')[current]).addClass('active');
	carousel.css({
		"-webkit-transform": "rotateY(" + currdeg + "deg)",
		"-moz-transform": "rotateY(" + currdeg + "deg)",
		"-o-transform": "rotateY(" + currdeg + "deg)",
		"transform": "rotateY(" + currdeg + "deg)"
	});
}
var getBeijingTime = function() {
	document.getElementById("beijingtime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Asia/Shanghai',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getBeijingTime();
setInterval(getBeijingTime, 1000);
var getParisTime = function() {
	document.getElementById("paristime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'Europe/Paris',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getParisTime();
setInterval(getParisTime, 1000);
var getNewYorkTime = function() {
	document.getElementById("nytime").innerHTML = new Date().toLocaleString("en-US", {
		timeZone: 'America/New_york',
		timeStyle: 'medium',
		hourCycle: 'h24'
	})
}
getNewYorkTime();
setInterval(getNewYorkTime, 1000);
