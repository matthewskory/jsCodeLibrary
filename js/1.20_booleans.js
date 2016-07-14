//boolean logic allows for only 2 possible answers true or false (1 or 0, on or off)

var x = true //true
	x ==1 //true
	x == 0 //false


var y = false // false
 	y == 1 //false
	y == 0 //true

var numOne = 1 
var numTwo = 2 

numOne > numTwo //false
numOne < numTwo //true

//undefined, null, "", 0,-0, NaN and False  all are considered False
//objects, strings with values and numbers not 0 or -0 are all True

//and(&&) or (||) not (!) string these guys together for mind melting

1 && true 		//true  - both sides MUST be true
false || true 	//true  - true when at least one side is true
!true 			// false- toggles a statement between true and false
