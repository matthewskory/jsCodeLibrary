//for loops setup how the loop will run in the beginning including declaring a value(i), run the loop till and increment

// standard for loop
for(var i = 0; i<10; i++){
	console.log("printing number "+i);
	//below we add another 1 to i each time it loops, thus incrementing it quicker than originally declared.
	i++;
};
// printing number 0
// printing number 2
// printing number 4
// printing number 6
// printing number 8



// for/in loops are pretty sweet when dealing with objects
//refer to 1.70 for more info on how objects work
var dog = {legs: 4, name: "lundy", favFood: "cat food", tricks: ["sit", "shake", "stay", "ignore everything"]};

   //traits refers to the variables inside of the dog
for (traits in dog){
	console.log(dog[traits]);
};

// 4
// lundy
// cat food
// [ 'sit', 'shake', 'stay', 'ignore everything' ]