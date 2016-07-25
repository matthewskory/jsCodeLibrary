//summary of methods found on this page
	//http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/
	//** all can be chained

		var array = [4, 9, 16, 25];
//map----------------------------------------------------------

		//creates a new array with the results of calling a function for each array element
		var newArray = array.map(function(number){
			return number*2;
		});
		console.log(newArray); //[ 8, 18, 32, 50 ]

//reduce ------------------------------------------------------
	// takes a callback and up to 4 arguments. 
	//the callback is the function to execute on each value of the array and the 0 indicates index 0 to start
		var reduceArray = array.reduce(function(total, number){
			return total + number;
		}, 0);
		console.log(reduceArray); //54

//filter ------------------------------------------------------

	var evenNums = array.filter(function(number){
		return (number % 2 === 0); //returns only even numbers
	});
	console.log(evenNums); //[ 4, 16 ]

	//filtering useing arrow function (lamdas)
	var even = array.filter(v => v % 2 == 0); // [ 4, 16 ]
	console.log(even);


//forEach-------------------------------------------------------
	
	var total = array.forEach(function(number){
		console.log(number);
	});
	console.log(total);


//indexes ------------------------------------------------------
	//Getting the index of the current element is trivial: it's the second argument for map, 
	//filter and forEach, and the third argument for reduce. In other words, it comes after the 
	//arguments I've shown in the examples so far.