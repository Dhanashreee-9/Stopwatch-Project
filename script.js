window.onload = function(){
var hour = 00;
var min=00;
var second =00;

let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let buttonStart = document.getElementById('button--start')
let buttonStop = document.getElementById('button--stop')
let buttonReset = document.getElementById('button--reset')
console.log(buttonReset)

var Interval;


buttonStart.onclick = function() {
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 100);
 }
 
   buttonStop.onclick = function() {
      clearInterval(Interval);
 }
 

 buttonReset.onclick = function() {
    clearInterval(Interval);
  hour="00";
  min="00";
  second="00";

   hours.innerHTML = hour;
   minutes.innerHTML = min;
   seconds.innerHTML = second;

 }
 function startTimer () {
    second++; 
    
    if(second <= 9){
      seconds.innerHTML = "0" + second;
    }
    
    if (second > 9){
      seconds.innerHTML = second;
      
    } 
    
    if (second > 60) {
      console.log("seconds");
      min++;
      minutes.innerHTML = "0" + min;
      second = 0;
      seconds.innerHTML = "0" + 0;
    }
    
    if (min > 9){
      minutes.innerHTML = min;
    }

    if (min > 1) {
        console.log("minutes");
        hour++;
        hours.innerHTML = "0" + hour;
        min = 0;
        minutes.innerHTML = "0" + 0;
        second = 0;
        seconds.innerHTML = "0" + 0;
      }
      
      if (hour > 9){
        hours.innerHTML = hour;
      }
  
  }

}
