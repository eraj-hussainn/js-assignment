
// 1. City Name
var city = prompt('Enter your City name here:');

if (city === "Karachi") {
    alert("Welcome to city of lights");
}


// 2. Gender
var gender = prompt("Enter your Gender");

if (gender === "Male" || gender === "male") {
    alert("Good Morning Sir");
}
else if (gender === "Female" || gender === "female") {
    alert("Good Morning Ma'am");
}


// 3. Traffic Signal
var color = prompt("Enter color of road traffic signal");

if (color === "red" || color === "Red") {
    alert("Must stop");
}
else if (color === "yellow" || color === "Yellow") {
    alert("Ready to move");
}
else if (color === "green" || color === "Green") {
    alert("Move now");
}


// 4. Remaining Fuel
var fuel = +prompt("Enter amount of fuel remaining in your car");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// 5. Run the following scripts

// a.
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


// b.
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}


// c.
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}


// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


// e.
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}


// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// 6. Marksheet
var obtMarks = +prompt("Enter your obtained marks in three subjects");
var total = +prompt("Enter your Total marks of three subjects");

var percentage = (obtMarks / total) * 100;

percentage = percentage.toFixed(2);

document.write("<h1>" + "MarkSheet" + "</h1>" + "<br>");
document.write("Total Marks : " + total + "<br>");
document.write("Obtained Marks : " + obtMarks + "<br>");
document.write("Percentage : " + percentage + "%" + "<br>");

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");


// 7. Guess Game
var secretNum = 6;
var userNum = +prompt("Enter your Number here");

if (userNum === secretNum) {
    alert("Bingo! Correct answer");
}
else if (userNum === secretNum + 1) {
    alert("Close enough to the correct answer!");
}


// 8. Divisible by 3
var userNum = +prompt("Enter your Number here");

if (userNum % 3 === 0) {
    alert(userNum + " is divisible by 3!");
}
else {
    alert(userNum + " is not divisible by 3!");
}


// 9. Even or Odd
var userNum = +prompt("Enter your Number here");

if (userNum % 2 === 0) {
    alert(userNum + " is an Even Number!");
}
else {
    alert(userNum + " is an Odd Number!");
}


// 10. Temperature
var temp = +prompt("Enter the Temperature here");

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The weather today is Normal.");
}
else if (temp > 20) {
    alert("Today's Weather is Cool.");
}
else if (temp > 10) {
    alert("OMG! Today's Weather is so Cool.");
}


// 11. Calculator
var num1 = +prompt("Enter your 1st Number here");
var operator = prompt("Enter your operator here");
var num2 = +prompt("Enter your 2nd Number here");

if (operator === "+") {
    alert(num1 + num2);
}
else if (operator === "-") {
    alert(num1 - num2);
}
else if (operator === "/") {
    alert(num1 / num2);
}
else if (operator === "*") {
    alert(num1 * num2);
}
else if (operator === "%") {
    alert(num1 % num2);
}

