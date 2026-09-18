// 1. Declare and initialize an empty multidimensional array.
// Answer:
var array = [];

console.log(array);


// 2. Declare and initialize a multidimensional array
// representing the following matrix:
//
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1
//
// Answer:

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);

// 3.  Write a program to print numeric counting from 1 to 10.

for (i = 1; i <= 10; i++) {
    console.log(i);
}

//4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNumber = Number(prompt("Enter table number:"));
var length = Number(prompt("Enter table length:"));

for (i = 1; i <= length; i++) {
    console.log(tableNumber + " x " + length + " = " + (tableNumber * i));
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. Generate the following series in your browser.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("Counting: ");

for (i = 1; i <= 15; i++) {
    document.write(i + " ");
}

document.write("<br><br>");


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("Reverse counting: ");

for (i = 10; i >= 1; i--) {
    document.write(i + " ");
}

document.write("<br><br>");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("Even: ");

for (li = 0; i <= 20; i += 2) {
    document.write(i);
}

document.write("<br><br>");


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("Odd: ");

for (i = 1; i <= 19; i += 2) {
    document.write(i);
}

document.write("<br><br>");


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Series: ");

for (i = 2; i <= 20; i += 2) {
    document.write(i + "k ");
}

// You have an array A = ["cake", "apple pie", "cookie", "chips", "patties"].
// Write a program to enable "search by user input" in an array.
// After searching, prompt the user whether the given item is found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Enter an item to search:");

if (A===item) {
    alert("Yes, " + item + " is found in the list.");
} else {
    alert("No, " + item + " is not found in the list.");
}

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]

 var A = [24, 53, 78, 91, 12];

 var largest = A[0];

for ( i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for ( i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("The smallest number is: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (i = 5; i <= 100; i += 5) {
    console.log(i);
}