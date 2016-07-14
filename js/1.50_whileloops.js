//While loops let you do something over and over while a condition is true. watch out for infinite loops

//while loop
var x = 1;

while(x < 10){
	console.log("x = "+ x)
	x ++;
};


//Do While will run at least ONCE since the while comes at the end

do{
	console.log("I'm printing even though i is too high!");
	var i = 11;
}
while(i<10);