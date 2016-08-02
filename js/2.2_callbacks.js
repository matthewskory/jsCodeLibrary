//Callbacks are just a function that is provided as a paramater to other methods
	//can be async or sync

var fruits = ["banana", "apple", "pear"];
	
	//Inline example 

		fruits.forEach(function(val){
			console.log(val)
		});
		console.log('done');

	//function declared elsewhere

		function callback(val){
			console.log(val)
		};

		fruits.forEach(callback);
		console.log("done");

	//the above code results in a sync callback as it prints fruit THEN done

//async callback using jQuery -----------------------------------------------

			// $.get('/path/to/file', function(data) {
			// 	console.log(data)optional stuff to do after success 
			// 	console.log(test);
			// });
		//above codes will start the GET request, console log test then console log the data

//avoid callback hell by not nesting multiple Callbacks
	//create an error handler function like below
		// function handleError(error){
		// 	console.log(error);
		// })

// ------------------corys example of callback hell--------------------------------
  //****see promises for a better version***********
var sleep = function(ms) {
	return function(callback) {
		setTimeout(callback, ms);	
	};
};

var squareWithCallback = function(num, callback) {
	sleep(1000).call(this, function() {
		callback(num * num);
	});
};

//below will wait for the num and then move onto the next one - taka long time!
squareWithCallback(10, function(num) {
	squareWithCallback(num, function(num) {
		squareWithCallback(num, function(num) {
			squareWithCallback(num, function(num){
				squareWithCallback(num, function(num) {
					console.log(num);
				});
			});
		});
	});
});