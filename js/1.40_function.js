//functions are for lazy smart people just dont forget to return out of it

					//this function takes 2 paramaters x and y
function findAreaOfRectangle(x, y){
	var area = x*y;
	return(area);
};

					//arguments are what you give to the function
console.log(findAreaOfRectangle(2,4)); // 8

// variable scope - if you forget to add var inside the function it will become global (remove the var from line 5 to see what i mean)
//console.log(area); //oh snap! area was defined within the function so you cant have it globally 

