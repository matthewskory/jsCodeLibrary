//Strings - more than just letters or ways to keep your shoes on

var stringOne = "I'm a string that's also a sentence";
var stringTwo = "string";

var stringOneLength = stringOne.length; //returns 30 

//.split() takes an argument on which it splits the string into an array of smaller strings. 
var splitThis = stringOne.split(" "); //[ 'I\'m', 'a', 'string', 'that\'s', 'also', 'a', 'sentence' ]

//slice() extracts parts of a string and returns what's left
var leftovers = stringTwo.slice(1, 5) //trin

var upper = stringTwo.toUpperCase() //STRING
var lower = stringTwo.toLowerCase() //string  - duh.

var joinedStrings = stringOne + stringTwo; // I'm a string that's also a sentencestring
