
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
 })



var getBeijingTime = function(){
    document.getElementById("beijingtime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Shanghai', timeStyle: 'medium', hourCycle: 'h24'})
}
getBeijingTime();
setInterval(getBeijingTime, 1000);

var getBeijingTime = function(){
    document.getElementById("walltime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Shanghai', timeStyle: 'medium', hourCycle: 'h24'})
}
getBeijingTime();
setInterval(getBeijingTime, 1000);

var getBeijingTime = function(){
    document.getElementById("shaanxitime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Shanghai', timeStyle: 'medium', hourCycle: 'h24'})
}
getBeijingTime();
setInterval(getBeijingTime, 1000);

var getBeijingTime = function(){
    document.getElementById("shanghaitime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Shanghai', timeStyle: 'medium', hourCycle: 'h24'})
}
getBeijingTime();
setInterval(getBeijingTime, 1000);

var getJapanTime = function(){
    document.getElementById("kyototime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Tokyo', timeStyle: 'medium', hourCycle: 'h24'})
}
getJapanTime();
setInterval(getJapanTime, 1000);

var getJapanTime = function(){
    document.getElementById("tokyotime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Tokyo', timeStyle: 'medium', hourCycle: 'h24'})
}
getJapanTime();
setInterval(getJapanTime, 1000);

var getJapanTime = function(){
    document.getElementById("shizuokatime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Tokyo', timeStyle: 'medium', hourCycle: 'h24'})
}
getJapanTime();
setInterval(getJapanTime, 1000);

var getJapanTime = function(){
    document.getElementById("chiyodatime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Tokyo', timeStyle: 'medium', hourCycle: 'h24'})
}
getJapanTime();
setInterval(getJapanTime, 1000);

var getUAETime = function(){
    document.getElementById("dubai1time").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'})
}
getUAETime();
setInterval(getUAETime, 1000);

var getUAETime = function(){
    document.getElementById("dubai2time").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'})
}
getUAETime();
setInterval(getUAETime, 1000);

var getUAETime = function(){
    document.getElementById("dubai3time").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'})
}
getUAETime();
setInterval(getUAETime, 1000);

var getUAETime = function(){
    document.getElementById("dubai4time").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'})
}
getUAETime();
setInterval(getUAETime, 1000);
