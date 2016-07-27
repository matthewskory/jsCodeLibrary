//object that represents an action that hasnt finished yet
	//can be pending, fulfilled, or rejected

	//created using promise constructor

// var promise = new Promise( function(resolve, reject) { /* Promise content */ } )

// //basic get function

// function get(url) {  
//   return new Promise(function(resolve, reject) {
//   	//creates a http request and GETS data from it
//     var req = new XMLHttpRequest();
//     req.open('GET', url);
//     //when that request loads do two possible things
//     req.onload = function() {
//     	//if its successful (status 200) then the resolve function is called (with with the req.data)
//       if (req.status == 200) { 
//           resolve(req.response); /* PROMISE RESOLVED */
//       } else { 
//       	//anything but a status 200 will call a reject function (with the status text)
//           reject(Error(req.statusText)); /* PROMISE REJECTED */
//       }
//     };

//     req.onerror = function() { reject(Error("Network Error")); };
//     req.send();
//   });
// }



//random number generator 
function generateRandomNumber () {
  return new Promise(function (resolve, reject) {
    var randomNumber = Math.floor((Math.random() * 10) + 1)
    if (randomNumber <= 5) {
      resolve(randomNumber)
    } else {
      reject(randomNumber)
    }
  })
}

generateRandomNumber().then(function(result) {
  console.log('Success: ' + result)
}).catch(function(error) {
  console.log('Error: ' + error)
})


// authentication example -----------------------

	// // try to authenticate a user with an id=333
	// fetch('/auth/333')
	//    // pass response object from the fetch call to authStatus
	//    // to check if authentication succeeded/failed
	//   .then(authStatus)
	//   // if authentication succeeded, call loadProfile() with the userName
	//   .then(loadProfile)
	//   // if authentication failed, we catch the rejected promise
	//   .catch(function (error) {
	//     console.log(error)
	//   })

	// function authStatus (response) {
	//   // if the server authenticates the user successfully, get the userName
	//   // from the response and resolve the promise
	//   if (response.status === 200) {
	//     // response.userName will be passed to the next `then`,
	//     // in this case it's the loadProfile function
	//     return Promise.resolve(response.userName)
	//   } else {
	//     // authentication failed, reject the promise
	//     return Promise.reject('User cannot be authenticated')
	//   }
	// }

	// function loadProfile (userName) {
	//   // fetch and log user's profile info with the userName passed in
	//   // from the authStatus function
	//   fetch('/profile/' + userName)
	//     .then(function (response) {
	//       console.log(response.profileData)
	//     })
	// }
