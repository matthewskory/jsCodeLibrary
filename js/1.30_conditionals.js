//I just walked in to see what Condition my Condition was in... 

//if else statements are nice.
if(true){
	//do stuff here
}else if(true){
	//do this other thing
}else {
	//last and final chance to do something
}


//switch statements are nice if you have a BUNCH of options dont forget your breaks which exit out when something is true

var food = prompt("what sounds good to eat?");
switch (food){

	case "cheese":
		console.log("cheese breath is the worst");
		break;

	case "carrots":
		console.log("don't eat those during quiet time they're too loud");
		break;
	default:
		console.log("you sit all day, are you sure you want that?");
		break;
}