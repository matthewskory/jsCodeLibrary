//The object of JavaScript's affection are Objects
//the object is a collection of named: values

//back to lundy the dog object from 1.60

//object literal - defines the object in the moment
var dog = {
	legs: 4, 
	firstName: "lundy", 
	favFood: "cat food", 
	tricks: ["sit", "shake", "stay", "ignore everything"]
};

//you can access and even change the value of an objects properties using the below convention
dog.firstName = "larry"; //now the likes to go by larry

console.log(dog.firstName); //larry
//or
console.log(dog['firstName']); //larry

//add some properties to the dog

dog.favoriteSmell = "litterBox"
console.log(dog.favoriteSmell); //litterbox
