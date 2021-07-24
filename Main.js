//========================= Countdown timer1 =================
// Set the date we're counting down to
var countDownDate1 = new Date("jul 23, 2021 09:30:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown1").innerHTML = days1 + "d. " + hours1 + "h. "
  + minutes1 + "m. " + seconds1 + "s ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("countdown1").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer2 =================
// Set the date we're counting down to
var countDownDate2 = new Date("jul 24, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown2").innerHTML = days2 + "d. " + hours2 + "h. "
  + minutes2 + "m. " + seconds2 + "s ";
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("countdown2").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer3 =================
// Set the date we're counting down to
var countDownDate3 = new Date("jul 25, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown3").innerHTML = days3 + "d. " + hours3 + "h. "
  + minutes3 + "m. " + seconds3 + "s ";
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("countdown3").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================