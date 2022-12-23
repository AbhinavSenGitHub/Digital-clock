function currentTime(){
let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let session = "AM";

if(hr > 12){
  hr = hr - 12;
  session = "PM"
}
// if number is less than 10 then put zero in front of it.
hr = (hr < 10) ? "0" + hr : hr;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;


// hr:min:sec  AM/PM
// let time = hr + ":" + min + ":" + sec + " " + session;
//  document.querySelector("#clock").textContent = time;

document.querySelector(".hours").textContent = hr;
document.querySelector(".min").textContent = min;
document.querySelector(".sec").textContent = sec;
document.querySelector(".session").textContent = session;




let count = setTimeout(function(){
  currentTime();
}, 1000);
}
currentTime();
