//when we click Start
// write once upon a time into story div

document.querySelector(".start-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>When you woke up today, you found out that you have a severe fever. Make your choice now: go to skl or stay at home?</p><img src='images/tenor.gif'></img>";

  //2. remove start button
  document.querySelector(".start-btn").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".school-btn").classList.remove("invisible");
  document.querySelector(".sleep-btn").classList.remove("invisible");

});

//functions are simply a list of commands to do


document.querySelector(".school-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>u decide to go to skl cuz you are nerdy. Now choose a way to get to skl.</p><img src='images/nerd.gif'></img>";

  //2. remove  button
  document.querySelector(".school-btn").classList.add("invisible");
  document.querySelector(".sleep-btn").classList.add("invisible");

  //3. show our next buttons
  document.querySelector(".taxi-btn").classList.remove("invisible");
  document.querySelector(".walk-btn").classList.remove("invisible");

});

document.querySelector(".taxi-btn").addEventListener("click", function(){
  loseSound.play();

  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>you're now late cuz of the traffic. U LOST.</p><img src='images/traffic.gif'></img>";

  //2. remove  button
  document.querySelector(".taxi-btn").classList.add("invisible");
  document.querySelector(".walk-btn").classList.add("invisible");


});

document.querySelector(".walk-btn").addEventListener("click", function(){
  winSound2.play();


  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>U MADE IT ONTIME. hope you make it thru the day with your fever! good luck </p><img src='images/goodluck.gif'></img>";

  //2. remove  button
  document.querySelector(".taxi-btn").classList.add("invisible");
  document.querySelector(".walk-btn").classList.add("invisible");


});


document.querySelector(".sleep-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p> wise choice! u decide to stay at home cuz you're not feeling well. Now decide whether or not you wanna call Ms. Sue</p><img src='images/sick.gif'></img>";

  //2. remove  button
  document.querySelector(".school-btn").classList.add("invisible");
  document.querySelector(".sleep-btn").classList.add("invisible");

  //3. show our next buttons
  document.querySelector(".call-btn").classList.remove("invisible");
  document.querySelector(".nah-btn").classList.remove("invisible");

});


document.querySelector(".call-btn").addEventListener("click", function(){
  winSound.play();

  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>WooHoo you won. Good Student ;)</p></p><img src='images/goodstudent.gif'></img>";

  //2. remove  button
  document.querySelector(".call-btn").classList.add("invisible");
  document.querySelector(".nah-btn").classList.add("invisible");

});

document.querySelector(".nah-btn").addEventListener("click", function(){
  loseSound2.play();
  //1. write the intro to our story
  document.querySelector(".story").innerHTML = "<p>Booo Pam found out. You got kicked out of skl ;( </p><img src='images/kickedout.gif'></img>";

  //2. remove  button
  document.querySelector(".call-btn").classList.add("invisible");
  document.querySelector(".nah-btn").classList.add("invisible");

});


var loseSound = new Audio('mp3/lose.mp3')

loseSound.play();

var loseSound2 = new Audio('mp3/ouch.mp3')

loseSound2.play();


var winSound = new Audio('mp3/win.mp3')

winSound.play();

var winSound2 = new Audio('mp3/win2.mp3')

winSound2.play();
