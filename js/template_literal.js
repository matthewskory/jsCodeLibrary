//template literal uses the backtick ``
	//can contain placeholders which are indicated by ${ stuff }
	//passes everything included into a fuction which defualts to a string

	var a = 3;
	var b = 3;

	var c = `the sum is equal to ${a+b}`;
	//console.log(c); //the sum is equal to 6

//make new lines-----------------------------------------------------
	console.log(`no way will 
	this work...
	OMG it worked`)