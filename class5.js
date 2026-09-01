// ----------- Chapter 5 MATH EXPRESSIONS ---------- 

// 1. Write a program that take two numbers & add them in a new variable.
// Show the result in your browser.

var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");

var add = firstNum + secondNum;

document.write("Sum of " + firstNum + " and " + secondNum + " is " + add + "<br>");


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// Subtraction
var sub = firstNum - secondNum;

document.write("Subtraction of " + firstNum + " and " + secondNum + " is " + sub + "<br>");

// Multiplication
var mul = firstNum * secondNum;

document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + mul + "<br>");

// Division
var div = firstNum / secondNum;

document.write("Division of " + firstNum + " and " + secondNum + " is " + div + "<br>");

// Modulus
var mod = firstNum % secondNum;

document.write("Modulus of " + firstNum + " and " + secondNum + " is " + mod + "<br>");


// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.

var number;

// b. Show the value of variable in your browser
// like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number.

number = 5;

// d. Show the value of variable in your browser
// like “Initial value: 5”.

document.write("Initial value: " + number + "<br>");

// e. Increment the variable.

number++;

// f. Show the value of variable in your browser
// like “Value after increment is: 6”.

document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable.

number += 7;

// h. Show the value of variable in your browser
// like “Value after addition is: 13”.

document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.

number--;

// j. Show the value of variable in your browser
// like “Value after decrement is: 12”.

document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

number = number % 3;

// l. Output: “The remainder is : 0”.

document.write("The remainder is: " + number + "<br>");


// 4. Cost of one movie ticket is 600 PKR.
// Calculate the cost of buying 5 tickets to a movie.

var ticketPrice = 600;

var total = ticketPrice * 5;

document.write(
    "The total cost to buy 5 tickets to a movie is " + total + " PKR" + "<br>"
);


// 5. Write a script to display multiplication table of any number.

document.write("Table of " + 5 + "<br>");

for (var i = 1; i <= 10; i++) {
    document.write("5 X " + i + " = " + 5 * i + "<br>");
}


// 6. The Temperature Converter

// a. Store a Celsius temperature into a variable.

var celsius = 25;

// b. Convert it to Fahrenheit.

var fahrenheit = (celsius * 9 / 5) + 32;

// c. Now store a Fahrenheit temperature into a variable.

fahrenheit = 77;

// d. Convert it to Celsius.

celsius = (fahrenheit - 32) * 5 / 9;

document.write(celsius + "C is " + fahrenheit + "F" + "<br/>");

document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");


// 7. Shopping Cart Checkout Process

// a. Price of item 1

var itemprice1 = 150;

// b. Price of item 2

var itemprice2 = 350;

// c. Ordered quantity of item 1

var quantityItem1 = 2;

// d. Ordered quantity of item 2

var quantityItem2 = 4;

// e. Shipping charges

var shippingCharges = 100;

// Compute the total cost

var total =
    (itemprice1 * quantityItem1) +
    (itemprice2 * quantityItem2) +
    shippingCharges;

document.write("Price of Item 1 is " + itemprice1 + "<br/>");

document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");

document.write("Price of Item 2 is " + itemprice2 + "<br/>");

document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");

document.write("Shipping Charges " + shippingCharges + "<br/>");

document.write("<br/>");

document.write("Total cost of your order is " + total + "<br/>");


// 8. Marks Sheet

var totalMarks = 1100;

var marksObtained = 910;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");

document.write("Total Marks: " + totalMarks + "<br/>");

document.write("Marks Obtained: " + marksObtained + "<br/>");

document.write("Percentage: " + percentage + "%<br/>");


// 9. Currency Conversion

// 1 US Dollar = 104.80 Pakistani Rupee
// 1 Saudi Riyal = 28 Pakistani Rupee

var pkr = (10 * 104.80) + (25 * 28);

document.write("<h3>Currency Conversion in PKR</h3>");

document.write("Total Currency in PKR: " + pkr + "<br/>");


// 10. Arithmetic Operations in Single Expression

var num = 5;

num = (((num + 5) * 10) / 2);

document.write("<h3>Arithmetic Operation in Single Statement</h3>");

document.write("Output: " + num + "<br/>");


// 11. Age Calculator

// a. Store the current year in a variable.

var year = 2022;

// b. Store their birth year in a variable.

var birthYear = 2005;

// c. Calculate their possible age.

var age = year - birthYear;

// Output

document.write("<h3>Age Calculator</h3>");

document.write("Current Year: " + year + "<br/>");

document.write("Birth Year: " + birthYear + "<br/>");

document.write("Your age is: " + age + "<br/>");


// 12. The Geometrizer
// Calculate properties of a circle.

document.write("<h3>The Geometrizer</h3>");

// a. Store a radius into a variable.

var radius = 7;

document.write("Radius of a Circle: " + radius + "<br/>");

// b. Calculate the circumference.

var circumference = 2 * 3.142 * radius;

document.write("The circumference is: " + circumference + "<br/>");

// Calculate the area.

var area = 3.142 * radius * radius;

document.write("The area is: " + area + "<br/>");


// 13. The Lifetime Supply Calculator

document.write("<h3>The Lifetime Supply Calculator</h3>");

// a. Store your favorite snack into a variable.

var snack = "Lays";

// b. Store your current age into a variable.

var age = 20;

// c. Store a maximum age into a variable.

var maxAge = 40;

// d. Store an estimated amount per day.

var amount = 3;

// e. Calculate how many you would eat total for the rest of your life.

var eat = (maxAge - age) * (365 * amount);

// Output

document.write("Favorite Snack: " + snack + "<br/>");

document.write("Current Age: " + age + "<br/>");

document.write("Estimated Maximum Age: " + maxAge + "<br/>");

document.write("Amount of snacks per day: " + amount + "<br/>");

document.write(
    "You will need " +
    eat +
    " " +
    snack +
    " to last you until the ripe old age of " +
    maxAge
);