/*
0. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
- Store the following into variables:
  number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/

var numKids  = 3;
var partnerName  = 'Joseph Smith';
var geoLocation = 'Paris';
var jobTitle = 'Graphic Designer';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partnerName + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

/*
1. The Age Calculator
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var birthYear = prompt ("Please provide your birth year");
var currentYear = 2016;
var age  = currentYear - birthYear;
console.log('You are either ' + age + ' or ' + (age - 1));

/*
2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/
var age = prompt ("Please enter your age.");
var maxAge = prompt ("Please enter the maximum age you think you will live.");
var snack = prompt ("Please enter your favorite snack.")
var amountPerDay = prompt ("Please enter quantity snacks you cosume per day.")
var total = (amountPerDay * 365) * (maxAge - age);
var message = 'You will need ' + total + ' ' + snack + ' to last you until the ripe old age of ' + maxAge;
console.log(message);

/*
3. The Geometrizer
Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

var radius = prompt ("Please enter radious of the circle: ")
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area); 

/*
4. The Temperature Converter
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

var celsius = prompt ("Celsius to Fahrenheit converter\n\n Please enter temperature in Celsius degrees: ");
var celsiusToF = (celsius*9)/5 + 32;
console.log(celsius + ' Celsius degrees is ' + celsiusToF + ' Fahrenheit degrees');
var fahrenheit = prompt ("Fahrenheit to Celsius converter\n\n Please enter temperature in Fahrenheit degrees: ");
var fahrenheitToC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + ' Fahrenheit degrees is ' + fahrenheitToC + ' Celsius degrees');
