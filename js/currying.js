//allows you to write a function that takes an undetermined number of arguments

//below was taken from sitepoint

var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"


function add(n){
 return function (a){
   return function (b){
     return function (c){
     return n+a+b+c

      }
   }
 }  
};

console.log(add(2)(5)(6)(7));






