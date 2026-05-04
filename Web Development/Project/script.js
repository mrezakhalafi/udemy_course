// alert("Hello World");
// alert(2+3);

typeof(23);
typeof("Reza");
typeof(true);

// 14.4

var myName = "Reza";
var yourName = prompt("What is your name?");
alert("My name is " + myName + ", welcome to my course " + yourName + "!");

// 14.7

var a = "3";
var b = "8";

var temp = a;
a = b;
b = temp;

console.log("a is " + a);
console.log("b is " + b);

// 14.8

var myName = "Reza";
var myName123_$ = "Reza with allowed character variable";

// 14.10

var message = "Hello"
var name = "Reza";

alert(message + "," + name + "!");

// 14.11

var name = "Reza";
name.length;

var tweet = prompt("Write your tweet below :");
var tweetLength = tweet.length;
alert("You already written " + tweetLength + " characters, you have " + (280 - tweetLength) + " characters left!");

// 14.12

var tweet = prompt("Enter max.140 characters :");
var sliceTweet = tweet.slice(0,140);
alert(sliceTweet);
