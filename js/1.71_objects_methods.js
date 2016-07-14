//objects can hold more than just satic data - put a method in there (we called them functions before)

var dog = {
	legs: 4, 
	firstName: "lundy", 
	favFood: "cat food", 
	tricks: ["sit", "shake", "stay", "ignore everything"],
	bark: function(x){
												//this refers to the dog object
		console.log(x +" "+ x +" "+x+ "my name is "+ this.firstName);
	}
};

//passing 'woof' or any sting will make your dog bark 3 times
console.log(dog.bark("woof"));