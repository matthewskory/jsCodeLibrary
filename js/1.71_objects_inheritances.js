// previously we created an object literal but lets create one using a constructor and have it inherit some things

//this function 
function Dog(firstName, legs, likes){
	this.firstName = firstName,
	this.legs = legs,
	this.likes = likes,
	this.tails = 1,
	this.favoriteThings = ["sleeping", "eating stuff", "sitting on command"]
};

//lundy is inherating the favorite things and tails  from the dog object
var lundy = new Dog("lundy", 5, "Treats", 2);

console.log(lundy);
console.log(lundy.legs);
console.log(lundy.favoriteThings[2]);