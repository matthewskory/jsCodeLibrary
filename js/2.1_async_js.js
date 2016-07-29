//starts something now and finishes it later
	//sync code runs on a single thread


	//AJAX example ---------------------------------------------------------------------------------
		//vanilla js
		window.onload = function(){
			var http = new XMLHTTPRequest();

			//http.open takes 3 paramaters - type(GET, POST, ..), url or json location and boolean for sync or async (true = async)
			http.open("GET", " ", true);
			http.send(); //sends the request
			console.log(http);
			console.log(test)
		};

		//jQuery option

								//callback
		$.get('/path/to/file', function(data) {
			console.log(data)/*optional stuff to do after success */
		});
		console.log(test);

			//above codes will start the GET request, console log test then console log the data

