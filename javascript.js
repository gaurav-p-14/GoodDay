var person = prompt("Hey! Whats your name?", "Name")
alert(`Hello ${person} we are GoodDay a productivty app and we hope you enjoy this extension!!`);
document.getElementById("welcome").innerText= `Welcome ${person} to GoodDay, a place that helps boost your productivity! Look around and see our daily shuffle of quotes and images as well as our very own pong game!! When your ready to start your day click the start button!`
var quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Chruchill",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen. - Deep Roy",
    "Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss",
    "You must do the things you think you cannot do. - Eleanor Roosevelt",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Let us make our future now, and let us make our dreams tomorrow's reality. - Malala Yousafzai",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely. - Roald Dahl",
    "The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
    "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
    "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs",

];


var imageNum = 0;
var imageDir = 'img/';
var randomNumber = 0;
var totalImgs;
let quote = document.getElementById("quoteDisplay");

document.addEventListener('DOMContentLoaded', function() {
  var quotebutton = document.getElementById("newQuoteButton");
  // onClick's logic below:
   quotebutton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * (quotes.length));
    quote.innerHTML = quotes[randomNumber];
  });
  var picButton =  document.getElementById("newPicButton");
  var imgtag = document.getElementById("picDisplay");
  // create array with all of the images
  var imgArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm'].map(function (n) {
    return "img/" + n + ".jpg"
  });
  picButton.addEventListener('click' ,function() {
    var randomNumber = getRnd(imgArray.length - 1);
    // get path to pic with that index
    var newPic = imgArray[randomNumber];
    let url = chrome.runtime.getURL(newPic);
    //console.log(chrome.extenstion.getURL)
    // set path to the image element
    imgtag.src = url;
});
});



// create random number from 0 to num
function getRnd(num) {
    return Math.floor(Math.random() * num)
}


 function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */
  
  
  