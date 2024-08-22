var Math=parseInt(prompt("Enter your Math Marks"));
var Physics=parseInt(prompt("Enter your Physics Marks"));
var Chemistry=parseInt(prompt("Enter your Chemistry Marks"));
var English=parseInt(prompt("Enter your English Marks"));
var Urdu=parseInt(prompt("Enter your Urdu Marks"));
var ObMarks=Math+Physics+Chemistry+English+Urdu;
var total=450;
console.log("Your parcentage is", ObMarks/total*100);