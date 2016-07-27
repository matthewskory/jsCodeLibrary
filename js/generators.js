//Generators 
	//yield pauses the function
	//js runs right to left?
	//.next() ieterates through your function untill it hits the next yield

function* gen(){
	x = yield "pear";
	console.log(x);
	yield "apple";
	yield "banana";
	return "all done";
};

var myGen = gen();
console.log(myGen.next(3));
console.log(myGen.next(3));




// // .next() can pass values into a existing function
// function* gen1(){
// 	var x = yield "pear";
// 	var y = yield "apple";
// 	var z = yield "banana";
// 	return x+y+z;
// };

// var myGen1 = gen1();
// console.log(myGen1.next());
// console.log(myGen1.next(10));
// console.log(myGen1.next(5));
// console.log(myGen1.next(3));


