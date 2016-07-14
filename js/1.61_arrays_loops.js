//Loop through that array

			// key  0       1         2             3                  4 	
var dogsHobbies = ["sit", "shake", "stay", "ignore everything", "stare awkwardly"];
   //traits refers to the variables inside of the dog
for (traits in dogsHobbies){
	console.log(dogsHobbies[traits]);
};

// sit
// shake
// stay
// ignore everything
// stare awkwardly

//you can do it the other way too AND skip every other using i=+2
			//how long is this array?	
for(var i= 0; i<dogsHobbies.length; i+= 2){
		console.log(dogsHobbies[i]);
}; 