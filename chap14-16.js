 // Question 1:
        // Declare an empty array using JS literal notation
        // to store student names in future.

        var studentNames = [];


        // Question 2:
        // Declare an empty array using JS object notation
        // to store student names in future.

        var studentNames = new Array();


        // Question 3:
        // Declare and initialize a strings array.

        var strings = ["Apple", "Mango", "Banana", "Orange"];


        // Question 4:
        // Declare and initialize a numbers array.

        var numbers = [10, 20, 30, 40, 50];


        // Question 5:
        // Declare and initialize a boolean array.

        var boolean = [true, false, true, false];


        // Question 6:
        // Declare and initialize a mixed array.

        var mixed = ["Eraj", 20, true, "Pakistan", 50];


        // Question 7:
        // Declare and initialize an array and store available
        // education qualifications in Pakistan.
        // Show the listed qualifications in your browser.

        var qualifications = [
            "SSC",
            "HSC",
            "BCS",
            "BS",
            "BCOM",
            "MS",
            "M. Phil.",
            "PhD"
        ];

        document.write("<h2>Qualifications:</h2>");

        document.write("1) " + qualifications[0] + "<br>");
        document.write("2) " + qualifications[1] + "<br>");
        document.write("3) " + qualifications[2] + "<br>");
        document.write("4) " + qualifications[3] + "<br>");
        document.write("5) " + qualifications[4] + "<br>");
        document.write("6) " + qualifications[5] + "<br>");
        document.write("7) " + qualifications[6] + "<br>");
        document.write("8) " + qualifications[7] + "<br>");
        // Question 8:
// Write a program to store 3 student names in an array.
// Take another array to store the scores of these students.
// Total marks are 500 for each student.
// Display the score and percentage of each student.

var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

var totalMarks = 500;

// Calculate and display percentage
for (var i = 0; i < studentNames.length; i++) {

    var percentage = (scores[i] / totalMarks) * 100;

    document.write(
        "Score of " + studentNames[i] +
        " is " + scores[i] +
        ". Percentage: " + percentage + "%<br>"
    );
}// Question 9:
// Initialize an array with color names.
// Display the array elements in your browser.

var colors = ["Red", "Green", "Blue", "Yellow"];

document.write("Original Array: " + colors + "<br><br>");


// a. Ask the user what color he/she wants to add
// to the beginning of the array.
// Add that color to the beginning.

var color = prompt("Enter a color to add at the beginning:");

colors.unshift(color);

document.write("After adding at beginning: " + colors + "<br><br>");


// b. Ask the user what color he/she wants to add
// to the end of the array.
// Add that color to the end.

color = prompt("Enter a color to add at the end:");

colors.push(color);

document.write("After adding at end: " + colors + "<br><br>");


// c. Add two more colors to the beginning of the array.

colors.unshift("Pink", "Purple");

document.write("After adding two colors: " + colors + "<br><br>");


// d. Delete the first color in the array.

colors.shift();

document.write("After deleting first color: " + colors + "<br><br>");


// e. Delete the last color in the array.

colors.pop();

document.write("After deleting last color: " + colors + "<br><br>");


// f. Ask the user at which index he/she wants to add a color
// and color name. Then add the color to that position.

var index = prompt("Enter the index where you want to add a color:");
var newColor = prompt("Enter the color name:");

colors.splice(index, 0, newColor);

document.write("After adding color at desired index: " + colors + "<br><br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var deltClr = +prompt("At which index you want to delete a color?")
var colorQuantity = +prompt("How many colors you want to remove?")

colors.splice (deltClr , colorQuantity )
console.log(colors)

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var studentScore = [320, 230, 480, 120]
studentScore.sort()
console.log(studentScore)

// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
var selectedCities = cityName.slice(1,4)
console.log(selectedCities)

// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

var arr = [];
console.log(arr);

arr.push("Keyboard");
console.log(arr);

arr.push("Mouse");
console.log(arr);

arr.push("Printer");
console.log(arr);

arr.push("Monitor");
console.log(arr);


arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out) 

var arr = [];
console.log(arr);

arr.push("Keyboard");
console.log(arr);

arr.push("Mouse");
console.log(arr);

arr.push("Printer");
console.log(arr);

arr.push("Monitor");
console.log(arr);


arr.pop()
console.log(arr);

arr.pop()
console.log(arr);

arr.pop()
console.log(arr);

arr.pop()
console.log(arr);


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = [
    "Apple", "Samsung", "Motorola","Nokia","Sony","Haier"];

document.write("<select>");

    document.write("<option>" + manufacturers[0] + "</option>");
    document.write("<option>" + manufacturers[1] + "</option>");
    document.write("<option>" + manufacturers[2] + "</option>");
    document.write("<option>" + manufacturers[3] + "</option>");
    document.write("<option>" + manufacturers[4] + "</option>");
    document.write("<option>" + manufacturers[5] + "</option>");

document.write("</select>");