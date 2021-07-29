//========================= Countdown timer1 =================
// Set the date we're counting down to
var padelCountDownDate1 = new Date("jul 29, 2021 10:45:00").getTime();

// Update the count down every 1 second
var y1 = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = padelCountDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("padelCountdown1").innerHTML = days1 + " d. " + hours1 + " h. "
  + minutes1 + " m. " + seconds1 + " s ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(y1);
    document.getElementById("padelCountdown1").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer2 =================
// Set the date we're counting down to
var padelCountDownDate2 = new Date("jul 30, 2021 10:45:00").getTime();

// Update the count down every 1 second
var y2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = padelCountDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("padelCountdown2").innerHTML = days2 + " d. " + hours2 + " h. "
  + minutes2 + " m. " + seconds2 + " s ";
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(y2);
    document.getElementById("padelCountdown2").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer3 =================
// Set the date we're counting down to
var padelCountDownDate3 = new Date("jul 31, 2021 11:45:00").getTime();

// Update the count down every 1 second
var y3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = padelCountDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("padelCountdown3").innerHTML = days3 + " d. " + hours3 + " h. "
  + minutes3 + " m. " + seconds3 + " s ";
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(y3);
    document.getElementById("padelCountdown3").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown3 =================================



// ##########################################    Viaplay   ####################################



//========================= Countdown timer1 =================
// Set the date we're counting down to
var viaCountDownDate1 = new Date("aug 06, 2021 09:30:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = viaCountDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("viaCountdown1").innerHTML = days1 + " d. " + hours1 + " h. "
  + minutes1 + " m. " + seconds1 + " s ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("viaCountdown1").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer2 =================
// Set the date we're counting down to
var viaCountDownDate2 = new Date("aug 07, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = viaCountDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("viaCountdown2").innerHTML = days2 + " d. " + hours2 + " h. "
  + minutes2 + " m. " + seconds2 + " s ";
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("viaCountdown2").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer3 =================
// Set the date we're counting down to
var viaCountDownDate3 = new Date("aug 08, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = viaCountDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("viaCountdown3").innerHTML = days3 + " d. " + hours3 + " h. "
  + minutes3 + " m. " + seconds3 + " s ";
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("viaCountdown3").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown3 =================================



//##########################   C MORE   #########################################################


//========================= Countdown timer1 =================
// Set the date we're counting down to
var cmoreCountDownDate1 = new Date("aug 04, 2021 09:15:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = cmoreCountDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("cmoreCountdown1").innerHTML = days1 + " d. " + hours1 + " h. "
  + minutes1 + " m. " + seconds1 + " s ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("cmoreCountdown1").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer2 =================
// Set the date we're counting down to
var cmoreCountDownDate2 = new Date("aug 04, 2021 11:54:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = cmoreCountDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("cmoreCountdown2").innerHTML = days2 + " d. " + hours2 + " h. "
  + minutes2 + " m. " + seconds2 + " s ";
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("cmoreCountdown2").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown2 =================================

//========================= Countdown timer3 =================
// Set the date we're counting down to
var cmoreCountDownDate3 = new Date("aug 04, 2021 16:45:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = cmoreCountDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("cmoreCountdown3").innerHTML = days3 + " d. " + hours3 + " h. "
  + minutes3 + " m. " + seconds3 + " s ";
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("cmoreCountdown3").innerHTML = "Started";
  }
}, 1000);

//=================================== END Countdown3 =================================