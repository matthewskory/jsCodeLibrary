//arrays are collections of values, go ahead a mix it up if you're into that thing.
//can contain anything and each VALUE is assigned a KEY starting at 0.

			// key  0       1         2             3                  4 	
var dogsHobbies = ["sit", "shake", "stay", "ignore everything", "stare awkwardly"];

console.log(dogsHobbies[2]); //stay
console.log(dogsHobbies[0]); //sit

//sorting arrays
	//compare function
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return a-b});

//the below  is from codewars and looks badass.
var list = [4,6,2,1,9,63,-134,566];
const min = (list) => Math.min(list);
const max = (list) => Math.max(list);

//2 easy way to add to an array
links.push('http://dailypuppy.com');
links[links.length] = 'http://bigeyedeer.wordpress.com';
