var name = ["matt", "james", "ryan", "chris", "tara"].filter(n => n.length > 4);
console.log(name); //[ 'james', 'chris' ]


var arr = [5, 6, 13, 0, 1, 18, 23];

var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

